
//   static void _generateMutations(
//       Map<String, dynamic> introspectionJson, Set<String> allGeneratedModels) {
//     try {
//       final types = introspectionJson['__schema']['types'] as List<dynamic>;
//       final mutationDirectory =
//           Directory('lib/src/magento/generated/mutations');
//       if (!mutationDirectory.existsSync()) {
//         mutationDirectory.createSync(recursive: true);
//       }

//       for (var type in types) {
//         if (type['__typename'] == '__Type' && type['name'] == 'Mutation') {
//           final fields = type['fields'] as List<dynamic>;
//           for (var field in fields) {
//             if (field is Map<String, dynamic>) {
//               final fieldName = field['name'] as String;
//               final args = field['args'] as List<dynamic>? ?? [];
//               final mutation = _generateMutationFromField(
//                   fieldName, field, introspectionJson);
//               final mutationFile = File(
//                   'lib/src/magento/generated/mutations/src/$fieldName.dart');
//               mutationFile.writeAsStringSync(mutation);
//             }
//           }
//         }
//       }


//     } catch (e) {
//       print('Error generating mutations: $e');
//     }
//   }



//   /// ***********************************[*Mutations]************************************************************************/
//   static String _generateMutationFromField(String fieldName,
//       Map<String, dynamic> field, Map<String, dynamic> introspectionJson) {
//     final args = field['args'] as List<dynamic>? ?? [];
//     final argList = args
//         .map((arg) {
//           if (arg is Map<String, dynamic>) {
//             final argName = arg['name'];
//             final argTypeName = _getArgTypeName(arg);
//             return '\$$argName: $argTypeName';
//           }
//           return null;
//         })
//         .where((arg) => arg != null)
//         .join(', ');

//     final type = field['type'];
//     final argVariables = args
//         .map((arg) {
//           if (arg is Map<String, dynamic>) {
//             final argName = arg['name'];
//             return '$argName: \$$argName'; // Replace argument value with variable
//           }
//           return null;
//         })
//         .where((arg) => arg != null)
//         .join(', ');

//     if (type['fields'] != null) {
//       final fields = type['fields'] as List<dynamic>;
//       if (fields.isEmpty) {
//         print('Skipping field $fieldName: No subfields found');
//         return '';
//       }
//     }

//     if (fieldName == 'addCartItemsToWishlist' ||
//         fieldName == 'assignCustomerToGuestCart' ||
//         fieldName == 'mergeCarts' ||
//         // fieldName == 'mergeCarts' ||
//         fieldName == 'createProductReview') {
//       if (field['type'] != null) {
//         return generateMissedOutTypeMutation2(
//             field, fieldName, argList, argVariables, introspectionJson);
//       }
//     }

//     // if (fieldName == 'subscribeEmailToNewsletter') {
//     String queryBody = '';
//     String subfields = '';
//     Set<String> additionalArgs = {};
//     subfields = type['fields'] != null
//         ? _generateSubfieldsMutaion2(type['fields'], introspectionJson)
//         : '';
//     List<String> lines = subfields.split('\n');

//     queryBody = lines.isNotEmpty
//         ? subfields.isEmpty
//             ? ''
//             : '{\n${lines.first}\n}'
//         : '';

//     // final queryBody = subfields.isNotEmpty ? '{\n$subfields\n}' : '';

//     return argList.isNotEmpty
//         ? """
// const String ${fieldName}Muation = r'''

//       mutation ${fieldName}Query($argList) {
//         $fieldName($argVariables) $queryBody
//       }
//       ''';
//       """
//         : """
// const String ${fieldName}Muation = r'''

//       mutation ${fieldName}Query {
//         $fieldName  $queryBody
//       }
//       ''';
//       """;
//     // }
//     // return '';
//   }

//   static String _generateSubfieldsMutaion2(
//       List<dynamic> fields, Map<String, dynamic> introspectionJson) {
//     return fields
//         .map((field) {
//           if (field is Map<String, dynamic>) {
//             final fieldName = field['name'] as String;
//             if (field.containsKey('type')) {
//               if (field['type'] != null) {
//                 if (field['type']['name'] == 'String' ||
//                     field['type']['name'] == 'Int' ||
//                     field['type']['name'] == 'ID' ||
//                     field['type']['name'] == 'Boolean') {
//                   return '$fieldName\n';
//                 } else if (field['type']['name'] == 'NegotiableQuotesOutput') {
//                   return '$fieldName{total_count}\n';
//                 } else if (field['type']['name'] == 'NegotiableQuote') {
//                   return '$fieldName{uid}\n';
//                 } else if (field['type']['name'] ==
//                     'SubscriptionStatusesEnum') {
//                   return '$fieldName\n';
//                 } else if (fieldName == 'review') {
//                   return '$fieldName{text}\n';
//                 } else if (field['type']['name'] == 'Cart') {
//                   return '$fieldName{id}\n';
//                 } else if (field['type']['name'] == 'GiftRegistry' ||
//                     field['type']['name'] == 'RequisitionList' ||
//                     field['type']['name'] == 'Return') {
//                   return '$fieldName{uid}\n';
//                 } else {
//                   if (field['type']['name'] == null) {
//                     if (field['type']['ofType'] != null) {
//                       final fieldofType = field['type']['ofType'];

//                       if (fieldofType['name'] == 'String' ||
//                           fieldofType['name'] == 'Int' ||
//                           fieldofType['name'] == 'Boolean') {
//                         return '$fieldName\n';
//                       } else if (fieldofType != null) {
//                         if (fieldofType['name'] != null) {
//                           final fieldOfTypeName = fieldofType['name'];
//                           if (fieldOfTypeName == 'EstimateShippingMethods') {
//                             return '$fieldName{error_message}\n';
//                           }
//                           if (fieldOfTypeName == 'Cart' ||
//                               fieldOfTypeName == 'CartItemsToWishlistOutput' ||
//                               fieldOfTypeName == 'Company' ||
//                               fieldOfTypeName == 'CompanyRole' ||
//                               fieldOfTypeName == 'CompanyTeam' ||
//                               fieldOfTypeName == 'Wishlist') {
//                             return '$fieldName{id}\n';
//                           }
//                           if (fieldOfTypeName == 'Customer' ||
//                               fieldOfTypeName == 'SendEmailToFriendRecipient') {
//                             return '$fieldName{email}\n';
//                           }
//                           if (fieldOfTypeName == 'Order') {
//                             return '$fieldName{order_number}\n';
//                           }
//                         }
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//             return '';
//           }
//         })
//         .where((field) => field != null)
//         .join(' ');
//   }

