export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}


import * as FileSystem from 'expo-file-system';
import { ApolloClient, HttpLink, InMemoryCache, gql } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
 import { isEmailAvailableQuery } from './generated/queries/queries';
import RNFS from "react-native-fs";

  

class MagentoGraphQL {

  static _url = '';
  static _accessToken = '';
  static _cacheStore = null;

  static client() {
    const link = new HttpLink({
      uri: `https://${MagentoGraphQL._url}/graphql`,
      headers: {
        Authorization: MagentoGraphQL._accessToken,
        'Content-Type': 'application/json',
      },
    });

    return new ApolloClient({
      link,
      cache: new InMemoryCache(),
    });
  }

  static async setStoreCredentials({ url, accessToken, cacheStore }: { url: string; accessToken: string; cacheStore: any }) {
    if (!url || !accessToken || !cacheStore) {
      throw new Error('Missing required parameters');
    }
    MagentoGraphQL._cacheStore = cacheStore;
    MagentoGraphQL._url = url;
    MagentoGraphQL._accessToken = accessToken;

    try {
      await AsyncStorage.setItem('url', url);
      await AsyncStorage.setItem('accessToken', accessToken);
    } catch (error) {
      console.error('Error storing credentials:', error);
    }
  }

  static async generate() {

    var IntrospectionQuery = gql`
query IntrospectionQuery {
  __schema {
    queryType {
      name
    }
    mutationType {
      name
    }
    subscriptionType {
      name
    }
    types {
      ...FullType
    }
    directives {
      name
      description
      locations
      args {
        ...InputValue
      }
    }
  }
}

fragment FullType on __Type {
  kind
  name
  description
  fields(includeDeprecated: true) {
    name
    description
    args {
      ...InputValue
    }
    type {
      ...TypeRef
      fields(includeDeprecated: true) {
        name
        description
        args {
          ...InputValue
        }
        type {
          ...TypeRef
        }
        isDeprecated
        deprecationReason
      }
      inputFields {
        ...InputValue
      }
      interfaces {
        ...TypeRef
      }
      enumValues(includeDeprecated: true) {
        name
        description
        isDeprecated
        deprecationReason
      }
      possibleTypes {
        ...TypeRef
      }
    }
    isDeprecated
    deprecationReason
  }
  inputFields {
    ...InputValue
  }
  interfaces {
    ...TypeRef
  }
  enumValues(includeDeprecated: true) {
    name
    description
    isDeprecated
    deprecationReason
  }
  possibleTypes {
    ...TypeRef
  }
}

fragment InputValue on __InputValue {
  name
  description
  type {
    ...TypeRef
  }
  defaultValue
}

fragment TypeRef on __Type {
  kind
  name
  ofType {
    kind
    name
    ofType {
      kind
      name
      ofType {
        kind
        name
      }
    }
  }
}
`;
    try {
      const result = await MagentoGraphQL.client().query({
        query: IntrospectionQuery,
      });

      if (result.errors) {
        console.error('Error generating Magento GraphQL schema :', result.errors);
        return false;
      } else {
        const introspectionJson = result.data;
        // console.log('====================================');
        // Define the path using Expo's FileSystem
        // const path = `/Users/rhino/Downloads/Reactnative/mobile_sdk_package/Ecommercesdk/src/generated/introspection_result/introspection_result.json`;
        // await FileSystem.writeAsStringAsync(path, JSON.stringify(introspectionJson, null, 2));
        // console.log(`Introspection JSON saved to ${path}`);

        MagentoGraphQL._generateQueries(introspectionJson);
        MagentoGraphQL._generateMutations(introspectionJson);
        // console.log(mutations);

        // // Store the mutations in a file using Expo FileSystem
        // const path2 = FileSystem.documentDirectory + 'generated_mutations.tsx';
        // await FileSystem.writeAsStringAsync(path2, mutations);
        // console.log(`Mutations saved to ${path}`);

        return true;
      }
    } catch (error) {
      console.error('Error generating Magento GraphQL schema:', error);
      return false;
    }
  }


  static async _generateMutations(introspectionJson: any) {
    const types = introspectionJson.__schema.types;


    // let mutations = '';
    let mutations: string[] = [];
    await MagentoGraphQL._generateMutationClasses(types);
    types.forEach((type: any) => {
      if (type.__typename === '__Type' && type.name === 'Mutation') {
        const fields = type.fields;
        fields.forEach((field: any) => {
          const fieldName = field.name;

          const args = field.args || [];
          const mutation = MagentoGraphQL._generateMutationFromField(fieldName, field, introspectionJson);
          mutations.push(mutation);
          // console.log(mutation);
          return;
        });
        return;

      }
    });
    const mutationFileContent = mutations.join('\n\n');
     const path = '/Users/admin/React/react-native-mobilesdk/Ecommercesdk/src/generated/mutations/mutations.tsx';

    try {
      await FileSystem.writeAsStringAsync(path, mutationFileContent);
      console.log(`Mutations saved to ${path}`);
    } catch (error) {
      console.error(`Error writing mutations to file: ${error}`);
    }

     return mutationFileContent;
  }

  static _generateMutationFromField(fieldName: string, field: any, introspectionJson: any) {
    const args = field.args || [];
    const argList = args.map((arg: any) => {
      const argName = arg.name;
      const argTypeName = MagentoGraphQL._getArgTypeName(arg);
      return `$${argName}: ${argTypeName}`;
    }).join(', ');

    const type = field.type;
    const argVariables = args.map((arg: any) => {
      if (arg && typeof arg === 'object' && 'name' in arg) {
        const argName = arg.name;
        return `${argName}: $${argName}`;
      }
      return null;
     }).filter((arg: null) => arg !== null).join(', ');

    let subfields = '';
    if (type.fields) {
      subfields = MagentoGraphQL._generateSubfieldsMutation(type.fields, introspectionJson);
    }

    const queryBody = subfields ? `{ ${subfields} }` : '';

    return `
export const ${fieldName}Mutation = \`
  mutation ${fieldName}Query(${argList}) {
    ${fieldName}(${argVariables}) ${queryBody}
  }
\`;
    `;
  }

  static _generateSubfieldsMutation(fields: any[], introspectionJson: any) {
    return fields.map((field: any) => {
      const fieldName = field.name;
      const typeName = field.type.name || field.type.ofType?.name;
      switch (typeName) {
        case 'String':
        case 'Int':
        case 'ID':
        case 'Boolean':
          return `${fieldName}`;
        // Handle other specific types
        default:
          return '';
      }
    }).filter((field: any) => field).join('\n');
  }
 
  
  static async isEmailAvailable( email: any ) {
    try {

      const client = MagentoGraphQL.client();
      const response = await client.query({
        query: gql(isEmailAvailableQuery),
        variables: { email }
      });
  
      // Log the full response to inspect its structure
      console.log('GraphQL Response:', response);
  
      const { data, errors } = response;
  
      if (errors && errors.length > 0) {
        console.error('GraphQL Errors:', errors);
        throw new Error(errors.map(error => error.message).join(', '));
      }
  
      if (data && data.isEmailAvailable) {
        return data.isEmailAvailable;
      } else {
        throw new Error('No data found for isEmailAvailable');
      }
    } catch (e) {
      console.error('Error in isEmailAvailable:', e);
      return null;
    }
  }


  static async _generateQueries(introspectionJson: any) {
    const types = introspectionJson.__schema.types;

    // let Query = '';
    let queries: string[] = [];
    await MagentoGraphQL._generateQueryClasses(types);
    types.forEach((type: any) => {
      if (type.__typename === '__Type' && type.name === 'Query') {
        const fields = type.fields;
        fields.forEach( (field: any) => {
          const fieldName = field.name;

          const args = field.args || [];
          const query = MagentoGraphQL._generateQueryFromField(fieldName, field, introspectionJson);
          queries.push(query);

          //  Query += Query;

        });
        return;

      }
    });
    const queryFileContent = queries.join('\n\n');
     const path = '/Users/admin/React/react-native-mobilesdk/Ecommercesdk/src/generated/queries/queries.tsx';

    try {
      await FileSystem.writeAsStringAsync(path, queryFileContent);
      console.log(`Queries saved to ${path}`);
    } catch (error) {
      console.error(`Error writing queries to file: ${error}`);
    }
     
     return queryFileContent;

    //  return Query;
  }

  static _generateQueryFromField(fieldName: string, field: any, introspectionJson: any) {
    const args = field.args || [];
    const argList = args.map((arg: any) => {
      const argName = arg.name;
      const argTypeName = MagentoGraphQL._getArgTypeName(arg);
      return `$${argName}: ${argTypeName}`;
    }).join(', ');

    const type = field.type;
    const argVariables = args.map((arg: any) => {
      if (arg && typeof arg === 'object' && 'name' in arg) {
        const argName = arg.name;
        return `${argName}: $${argName}`;
      }
      return null;
     }).filter((arg: null) => arg !== null).join(', ');

    let subfields = '';
    if (type.fields) {
      subfields = MagentoGraphQL._generateSubfieldsQuery(type.fields, introspectionJson);
    }

    const queryBody = subfields ? `{ ${subfields} }` : '';
   if(fieldName == 'isEmailAvailable'){
    console.log(argList);
   }
    return `
export const ${fieldName}Query = \`
  query ${fieldName}Query(${argList}) {
    ${fieldName}(${argVariables}) ${queryBody}
  }
\`;
    `;
  }

  static _generateSubfieldsQuery(fields: any[], introspectionJson: any) {
    return fields.map((field: any) => {
      const fieldName = field.name;
      const typeName = field.type.name || field.type.ofType?.name;
      switch (typeName) {
        case 'String':
        case 'Int':
        case 'ID':
        case 'Boolean':
          return `${fieldName}`;
        // Handle other specific types
        default:
          return '';
      }
    }).filter((field: any) => field).join('\n');
  }

  static async _generateQueryClasses(types: any){
    
    let classBuffer = `// Auto-generated file, do not edit manually
import { gql } from '@apollo/client';
import MagentoGraphQL from '../../../lib/typescript/src';
import  * as allQueries from '../../generated/queries/queries';\n\n`;

  classBuffer += 'class GeneratedQueryClasses {\n';
  types.forEach((type: any) => {
    if (type.__typename === '__Type' && type.name === 'Query') {
      const fields = type.fields;
      fields.forEach((field: any) => {
        const fieldName = field.name;

        const args = field.args || [];
        const modifyArgList = args.map((arg:any) => {
          const argName = arg.name;
          
          let argTypeName = MagentoGraphQL._getArgTypeName(arg);
          argTypeName = argTypeName.replace('!', '');

          if (argTypeName === 'Int') return `${argName}: number`;
          if (argTypeName === 'String' || argTypeName === 'ID') return `${argName}: string`;
          if (argTypeName === 'Boolean') return `${argName}: boolean`;
          if (argTypeName.startsWith('[') && argTypeName.endsWith(']')) return `${argName}: any`;
          
          // Handle custom types and arrays
          return `${argName}: any`;
        }).join(', ');

        const functionSignature = modifyArgList ? `static async ${fieldName}( ${modifyArgList} )` : `static async ${fieldName}()`;

        const variables = args.map((arg: any) => {
          const argName = arg.name;
          return `${argName}`;
        }).join(', ');

        const functionBody = `
        var client = MagentoGraphQL.client();

    try {
      const { data, errors } = await client.query({
        query: gql(allQueries.${fieldName}Query),
        variables: { ${variables} }
      });

      if (errors && errors.length > 0) {
        console.error('GraphQL Errors:', errors);
        throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
      }

      if (data && data.${fieldName}) {
        return data.${fieldName};
      } else {
        throw new Error('No data found for ${fieldName}');
      }
    } catch (e) {
      console.error('Error in ${fieldName}:', e);
      return null;
    }`;

        classBuffer += `  ${functionSignature} {\n${functionBody}\n  }\n`;
        // classes.push(classBuffer);
      });
    }
  });

  classBuffer += '}\n';
  // const classesFileContent = classes.join('\n\n');
     const path = '/Users/admin/React/react-native-mobilesdk/Ecommercesdk/src/generated/generated_classes/query_classes.tsx';

    try {
      await FileSystem.writeAsStringAsync(path, classBuffer);
      console.log(`Queries classes saved to ${path}`);
    } catch (error) {
      console.error(`Error writing queries classes to file: ${error}`);
    }
  return classBuffer;
  }

  static async _generateMutationClasses(types: any){
    
    let classBuffer = `// Auto-generated file, do not edit manually
import { gql } from '@apollo/client';
import MagentoGraphQL from '../../../lib/typescript/src';
import  * as allMutation from '../../generated/mutations/mutations';\n\n`;

  classBuffer += 'class GeneratedMutationClasses {\n\n';
  types.forEach((type: any) => {
    if (type.__typename === '__Type' && type.name === 'Mutation') {
      const fields = type.fields;
      fields.forEach((field: any) => {
        const fieldName = field.name;

        const args = field.args || [];
        const modifyArgList = args.map((arg:any) => {
          const argName = arg.name;
          
          let argTypeName = MagentoGraphQL._getArgTypeName(arg);
          argTypeName = argTypeName.replace('!', '');

          if (argTypeName === 'Int') return `${argName}: number`;
          if (argTypeName === 'String' || argTypeName === 'ID') return `${argName}: string`;
          if (argTypeName === 'Boolean') return `${argName}: boolean`;
          if (argTypeName.startsWith('[') && argTypeName.endsWith(']')) return `${argName}: any`;
          
          // Handle custom types and arrays
          return `${argName}: any`;
        }).join(', ');

        const functionSignature = modifyArgList ? `static async ${fieldName}( ${modifyArgList} )` : `static async ${fieldName}()`;

        const variables = args.map((arg: any) => {
          const argName = arg.name;
          return `${argName}`;
        }).join(', ');

        const functionBody = `
        var client = MagentoGraphQL.client();
    try {
      const { data, errors } = await client.mutate({
        mutation: gql(allMutation.${fieldName}Mutation),
        variables: { ${variables} }
      });

      if (errors && errors.length > 0) {
        console.error('GraphQL Errors:', errors);
        throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
      }

      if (data && data.${fieldName}) {
        return true;
      } else {
        throw new Error('No data found for ${fieldName}');
      }
    } catch (e) {
      console.error('Error in ${fieldName}:', e);
      return false;
    }`;

        classBuffer += `  ${functionSignature} {\n${functionBody}\n  }\n\n`;
        // classes.push(classBuffer);
      });
    }
  });

  classBuffer += '}\n';
  // const classesFileContent = classes.join('\n\n');
     const path = '/Users/admin/React/react-native-mobilesdk/Ecommercesdk/src/generated/generated_classes/mutation_classes.tsx';

    try {
      await FileSystem.writeAsStringAsync(path, classBuffer);
      console.log(`Mutations classes saved to ${path}`);
    } catch (error) {
      console.error(`Error writing mutation classes to file: ${error}`);
    }
  return classBuffer;
  }


  static _getArgTypeName(arg: any): string {
    const argType = arg.type;
    if (argType) {
      const kind: string = argType.kind;
      const name: string | null = argType.name;
      if (kind === 'NON_NULL') {
        const ofType: any = argType.ofType;
        const argTyp: string = MagentoGraphQL._getArgTypeName(ofType);
        return `${argTyp}!`;
      } else if (kind === 'LIST') {
        const ofType: any = argType.ofType;
        const argTyp: string = MagentoGraphQL._getArgTypeName(ofType);
        return `[${argTyp}]`;
      }
      return name || 'dynamic';
    } else {
      const kind: string = arg.kind;
      const name: string | null = arg.name;
      if (kind === 'NON_NULL') {
        const ofType: any = arg.ofType;
        const argTyp: string = MagentoGraphQL._getArgTypeName(ofType);
        return `${argTyp}!`;
      } else if (kind === 'LIST') {
        const ofType: any = arg.ofType;
        const argTyp: string = MagentoGraphQL._getArgTypeName(ofType);
        return `[${argTyp}]`;
      } else if (kind === 'INPUT_OBJECT') {
        return `${name}`;
      }
      return name || 'dynamic';
    }
  }
  
  

  // static _getArgTypeName(arg: ArgType): string {
  //   if (arg.kind === 'NON_NULL') {
  //     return `${MagentoGraphQL._getArgTypeName(arg.ofType!)}!`;
  //   } else if (arg.kind === 'LIST') {
  //     return `[${MagentoGraphQL._getArgTypeName(arg.ofType!)}]`;
  //   } else if (arg.kind === 'INPUT_OBJECT') {
  //     return arg.name ?? 'dynamic';
  //   }
  //   return arg.name ?? 'dynamic';
  // }
}



interface ArgType {
  kind: string;
  name?: string;
  ofType?: ArgType;
}
export default MagentoGraphQL;
