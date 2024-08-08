// Auto-generated file, do not edit manually
import { gql } from '@apollo/client';
import MagentoGraphQL from '../../../lib/typescript/src';
import  * as allQueries from '../../generated/queries/queries';

class GeneratedQueryClasses {
  static async availableStores( useCurrentGroup: boolean ) {

        var client = MagentoGraphQL.client();

    try {
      const { data, errors } = await client.query({
        query: gql(allQueries.availableStoresQuery),
        variables: { useCurrentGroup }
      });

      if (errors && errors.length > 0) {
        console.error('GraphQL Errors:', errors);
        throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
      }

      if (data && data.availableStores) {
        return data.availableStores;
      } else {
        throw new Error('No data found for availableStores');
      }
    } catch (e) {
      console.error('Error in availableStores:', e);
      return null;
    }
  }
  static async cart( cart_id: string ) {

        var client = MagentoGraphQL.client();

    try {
      const { data, errors } = await client.query({
        query: gql(allQueries.cartQuery),
        variables: { cart_id }
      });

      if (errors && errors.length > 0) {
        console.error('GraphQL Errors:', errors);
        throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
      }

      if (data && data.cart) {
        return data.cart;
      } else {
        throw new Error('No data found for cart');
      }
    } catch (e) {
      console.error('Error in cart:', e);
      return null;
    }
  }
  static async categories( filters: any, pageSize: number, currentPage: number ) {

        var client = MagentoGraphQL.client();

    try {
      const { data, errors } = await client.query({
        query: gql(allQueries.categoriesQuery),
        variables: { filters, pageSize, currentPage }
      });

      if (errors && errors.length > 0) {
        console.error('GraphQL Errors:', errors);
        throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
      }

      if (data && data.categories) {
        return data.categories;
      } else {
        throw new Error('No data found for categories');
      }
    } catch (e) {
      console.error('Error in categories:', e);
      return null;
    }
  }
  static async category( id: number ) {

        var client = MagentoGraphQL.client();

    try {
      const { data, errors } = await client.query({
        query: gql(allQueries.categoryQuery),
        variables: { id }
      });

      if (errors && errors.length > 0) {
        console.error('GraphQL Errors:', errors);
        throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
      }

      if (data && data.category) {
        return data.category;
      } else {
        throw new Error('No data found for category');
      }
    } catch (e) {
      console.error('Error in category:', e);
      return null;
    }
  }
  static async categoryList( filters: any ) {

        var client = MagentoGraphQL.client();

    try {
      const { data, errors } = await client.query({
        query: gql(allQueries.categoryListQuery),
        variables: { filters }
      });

      if (errors && errors.length > 0) {
        console.error('GraphQL Errors:', errors);
        throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
      }

      if (data && data.categoryList) {
        return data.categoryList;
      } else {
        throw new Error('No data found for categoryList');
      }
    } catch (e) {
      console.error('Error in categoryList:', e);
      return null;
    }
  }
  static async checkoutAgreements() {

        var client = MagentoGraphQL.client();

    try {
      const { data, errors } = await client.query({
        query: gql(allQueries.checkoutAgreementsQuery),
        variables: {  }
      });

      if (errors && errors.length > 0) {
        console.error('GraphQL Errors:', errors);
        throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
      }

      if (data && data.checkoutAgreements) {
        return data.checkoutAgreements;
      } else {
        throw new Error('No data found for checkoutAgreements');
      }
    } catch (e) {
      console.error('Error in checkoutAgreements:', e);
      return null;
    }
  }
  static async cmsBlocks( identifiers: any ) {

        var client = MagentoGraphQL.client();

    try {
      const { data, errors } = await client.query({
        query: gql(allQueries.cmsBlocksQuery),
        variables: { identifiers }
      });

      if (errors && errors.length > 0) {
        console.error('GraphQL Errors:', errors);
        throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
      }

      if (data && data.cmsBlocks) {
        return data.cmsBlocks;
      } else {
        throw new Error('No data found for cmsBlocks');
      }
    } catch (e) {
      console.error('Error in cmsBlocks:', e);
      return null;
    }
  }
  static async cmsPage( id: number, identifier: string ) {

        var client = MagentoGraphQL.client();

    try {
      const { data, errors } = await client.query({
        query: gql(allQueries.cmsPageQuery),
        variables: { id, identifier }
      });

      if (errors && errors.length > 0) {
        console.error('GraphQL Errors:', errors);
        throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
      }

      if (data && data.cmsPage) {
        return data.cmsPage;
      } else {
        throw new Error('No data found for cmsPage');
      }
    } catch (e) {
      console.error('Error in cmsPage:', e);
      return null;
    }
  }
  static async compareList( uid: string ) {

        var client = MagentoGraphQL.client();

    try {
      const { data, errors } = await client.query({
        query: gql(allQueries.compareListQuery),
        variables: { uid }
      });

      if (errors && errors.length > 0) {
        console.error('GraphQL Errors:', errors);
        throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
      }

      if (data && data.compareList) {
        return data.compareList;
      } else {
        throw new Error('No data found for compareList');
      }
    } catch (e) {
      console.error('Error in compareList:', e);
      return null;
    }
  }
  static async countries() {

        var client = MagentoGraphQL.client();

    try {
      const { data, errors } = await client.query({
        query: gql(allQueries.countriesQuery),
        variables: {  }
      });

      if (errors && errors.length > 0) {
        console.error('GraphQL Errors:', errors);
        throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
      }

      if (data && data.countries) {
        return data.countries;
      } else {
        throw new Error('No data found for countries');
      }
    } catch (e) {
      console.error('Error in countries:', e);
      return null;
    }
  }
  static async country( id: string ) {

        var client = MagentoGraphQL.client();

    try {
      const { data, errors } = await client.query({
        query: gql(allQueries.countryQuery),
        variables: { id }
      });

      if (errors && errors.length > 0) {
        console.error('GraphQL Errors:', errors);
        throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
      }

      if (data && data.country) {
        return data.country;
      } else {
        throw new Error('No data found for country');
      }
    } catch (e) {
      console.error('Error in country:', e);
      return null;
    }
  }
  static async currency() {

        var client = MagentoGraphQL.client();

    try {
      const { data, errors } = await client.query({
        query: gql(allQueries.currencyQuery),
        variables: {  }
      });

      if (errors && errors.length > 0) {
        console.error('GraphQL Errors:', errors);
        throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
      }

      if (data && data.currency) {
        return data.currency;
      } else {
        throw new Error('No data found for currency');
      }
    } catch (e) {
      console.error('Error in currency:', e);
      return null;
    }
  }
  static async customAttributeMetadata( attributes: any ) {

        var client = MagentoGraphQL.client();

    try {
      const { data, errors } = await client.query({
        query: gql(allQueries.customAttributeMetadataQuery),
        variables: { attributes }
      });

      if (errors && errors.length > 0) {
        console.error('GraphQL Errors:', errors);
        throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
      }

      if (data && data.customAttributeMetadata) {
        return data.customAttributeMetadata;
      } else {
        throw new Error('No data found for customAttributeMetadata');
      }
    } catch (e) {
      console.error('Error in customAttributeMetadata:', e);
      return null;
    }
  }
  static async customer() {

        var client = MagentoGraphQL.client();

    try {
      const { data, errors } = await client.query({
        query: gql(allQueries.customerQuery),
        variables: {  }
      });

      if (errors && errors.length > 0) {
        console.error('GraphQL Errors:', errors);
        throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
      }

      if (data && data.customer) {
        return data.customer;
      } else {
        throw new Error('No data found for customer');
      }
    } catch (e) {
      console.error('Error in customer:', e);
      return null;
    }
  }
  static async customerCart() {

        var client = MagentoGraphQL.client();

    try {
      const { data, errors } = await client.query({
        query: gql(allQueries.customerCartQuery),
        variables: {  }
      });

      if (errors && errors.length > 0) {
        console.error('GraphQL Errors:', errors);
        throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
      }

      if (data && data.customerCart) {
        return data.customerCart;
      } else {
        throw new Error('No data found for customerCart');
      }
    } catch (e) {
      console.error('Error in customerCart:', e);
      return null;
    }
  }
  static async customerDownloadableProducts() {

        var client = MagentoGraphQL.client();

    try {
      const { data, errors } = await client.query({
        query: gql(allQueries.customerDownloadableProductsQuery),
        variables: {  }
      });

      if (errors && errors.length > 0) {
        console.error('GraphQL Errors:', errors);
        throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
      }

      if (data && data.customerDownloadableProducts) {
        return data.customerDownloadableProducts;
      } else {
        throw new Error('No data found for customerDownloadableProducts');
      }
    } catch (e) {
      console.error('Error in customerDownloadableProducts:', e);
      return null;
    }
  }
  static async customerOrders() {

        var client = MagentoGraphQL.client();

    try {
      const { data, errors } = await client.query({
        query: gql(allQueries.customerOrdersQuery),
        variables: {  }
      });

      if (errors && errors.length > 0) {
        console.error('GraphQL Errors:', errors);
        throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
      }

      if (data && data.customerOrders) {
        return data.customerOrders;
      } else {
        throw new Error('No data found for customerOrders');
      }
    } catch (e) {
      console.error('Error in customerOrders:', e);
      return null;
    }
  }
  static async customerPaymentTokens() {

        var client = MagentoGraphQL.client();

    try {
      const { data, errors } = await client.query({
        query: gql(allQueries.customerPaymentTokensQuery),
        variables: {  }
      });

      if (errors && errors.length > 0) {
        console.error('GraphQL Errors:', errors);
        throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
      }

      if (data && data.customerPaymentTokens) {
        return data.customerPaymentTokens;
      } else {
        throw new Error('No data found for customerPaymentTokens');
      }
    } catch (e) {
      console.error('Error in customerPaymentTokens:', e);
      return null;
    }
  }
  static async dynamicBlocks( input: any, pageSize: number, currentPage: number ) {

        var client = MagentoGraphQL.client();

    try {
      const { data, errors } = await client.query({
        query: gql(allQueries.dynamicBlocksQuery),
        variables: { input, pageSize, currentPage }
      });

      if (errors && errors.length > 0) {
        console.error('GraphQL Errors:', errors);
        throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
      }

      if (data && data.dynamicBlocks) {
        return data.dynamicBlocks;
      } else {
        throw new Error('No data found for dynamicBlocks');
      }
    } catch (e) {
      console.error('Error in dynamicBlocks:', e);
      return null;
    }
  }
  static async getHostedProUrl( input: any ) {

        var client = MagentoGraphQL.client();

    try {
      const { data, errors } = await client.query({
        query: gql(allQueries.getHostedProUrlQuery),
        variables: { input }
      });

      if (errors && errors.length > 0) {
        console.error('GraphQL Errors:', errors);
        throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
      }

      if (data && data.getHostedProUrl) {
        return data.getHostedProUrl;
      } else {
        throw new Error('No data found for getHostedProUrl');
      }
    } catch (e) {
      console.error('Error in getHostedProUrl:', e);
      return null;
    }
  }
  static async getPayflowLinkToken( input: any ) {

        var client = MagentoGraphQL.client();

    try {
      const { data, errors } = await client.query({
        query: gql(allQueries.getPayflowLinkTokenQuery),
        variables: { input }
      });

      if (errors && errors.length > 0) {
        console.error('GraphQL Errors:', errors);
        throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
      }

      if (data && data.getPayflowLinkToken) {
        return data.getPayflowLinkToken;
      } else {
        throw new Error('No data found for getPayflowLinkToken');
      }
    } catch (e) {
      console.error('Error in getPayflowLinkToken:', e);
      return null;
    }
  }
  static async giftCardAccount( input: any ) {

        var client = MagentoGraphQL.client();

    try {
      const { data, errors } = await client.query({
        query: gql(allQueries.giftCardAccountQuery),
        variables: { input }
      });

      if (errors && errors.length > 0) {
        console.error('GraphQL Errors:', errors);
        throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
      }

      if (data && data.giftCardAccount) {
        return data.giftCardAccount;
      } else {
        throw new Error('No data found for giftCardAccount');
      }
    } catch (e) {
      console.error('Error in giftCardAccount:', e);
      return null;
    }
  }
  static async giftRegistry( giftRegistryUid: string ) {

        var client = MagentoGraphQL.client();

    try {
      const { data, errors } = await client.query({
        query: gql(allQueries.giftRegistryQuery),
        variables: { giftRegistryUid }
      });

      if (errors && errors.length > 0) {
        console.error('GraphQL Errors:', errors);
        throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
      }

      if (data && data.giftRegistry) {
        return data.giftRegistry;
      } else {
        throw new Error('No data found for giftRegistry');
      }
    } catch (e) {
      console.error('Error in giftRegistry:', e);
      return null;
    }
  }
  static async giftRegistryEmailSearch( email: string ) {

        var client = MagentoGraphQL.client();

    try {
      const { data, errors } = await client.query({
        query: gql(allQueries.giftRegistryEmailSearchQuery),
        variables: { email }
      });

      if (errors && errors.length > 0) {
        console.error('GraphQL Errors:', errors);
        throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
      }

      if (data && data.giftRegistryEmailSearch) {
        return data.giftRegistryEmailSearch;
      } else {
        throw new Error('No data found for giftRegistryEmailSearch');
      }
    } catch (e) {
      console.error('Error in giftRegistryEmailSearch:', e);
      return null;
    }
  }
  static async giftRegistryIdSearch( giftRegistryUid: string ) {

        var client = MagentoGraphQL.client();

    try {
      const { data, errors } = await client.query({
        query: gql(allQueries.giftRegistryIdSearchQuery),
        variables: { giftRegistryUid }
      });

      if (errors && errors.length > 0) {
        console.error('GraphQL Errors:', errors);
        throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
      }

      if (data && data.giftRegistryIdSearch) {
        return data.giftRegistryIdSearch;
      } else {
        throw new Error('No data found for giftRegistryIdSearch');
      }
    } catch (e) {
      console.error('Error in giftRegistryIdSearch:', e);
      return null;
    }
  }
  static async giftRegistryTypeSearch( firstName: string, lastName: string, giftRegistryTypeUid: string ) {

        var client = MagentoGraphQL.client();

    try {
      const { data, errors } = await client.query({
        query: gql(allQueries.giftRegistryTypeSearchQuery),
        variables: { firstName, lastName, giftRegistryTypeUid }
      });

      if (errors && errors.length > 0) {
        console.error('GraphQL Errors:', errors);
        throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
      }

      if (data && data.giftRegistryTypeSearch) {
        return data.giftRegistryTypeSearch;
      } else {
        throw new Error('No data found for giftRegistryTypeSearch');
      }
    } catch (e) {
      console.error('Error in giftRegistryTypeSearch:', e);
      return null;
    }
  }
  static async giftRegistryTypes() {

        var client = MagentoGraphQL.client();

    try {
      const { data, errors } = await client.query({
        query: gql(allQueries.giftRegistryTypesQuery),
        variables: {  }
      });

      if (errors && errors.length > 0) {
        console.error('GraphQL Errors:', errors);
        throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
      }

      if (data && data.giftRegistryTypes) {
        return data.giftRegistryTypes;
      } else {
        throw new Error('No data found for giftRegistryTypes');
      }
    } catch (e) {
      console.error('Error in giftRegistryTypes:', e);
      return null;
    }
  }
  static async isEmailAvailable( email: string ) {

        var client = MagentoGraphQL.client();

    try {
      const { data, errors } = await client.query({
        query: gql(allQueries.isEmailAvailableQuery),
        variables: { email }
      });

      if (errors && errors.length > 0) {
        console.error('GraphQL Errors:', errors);
        throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
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
  static async menuItems( menuKey: string, parentId: number ) {

        var client = MagentoGraphQL.client();

    try {
      const { data, errors } = await client.query({
        query: gql(allQueries.menuItemsQuery),
        variables: { menuKey, parentId }
      });

      if (errors && errors.length > 0) {
        console.error('GraphQL Errors:', errors);
        throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
      }

      if (data && data.menuItems) {
        return data.menuItems;
      } else {
        throw new Error('No data found for menuItems');
      }
    } catch (e) {
      console.error('Error in menuItems:', e);
      return null;
    }
  }
  static async productReviewRatingsMetadata() {

        var client = MagentoGraphQL.client();

    try {
      const { data, errors } = await client.query({
        query: gql(allQueries.productReviewRatingsMetadataQuery),
        variables: {  }
      });

      if (errors && errors.length > 0) {
        console.error('GraphQL Errors:', errors);
        throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
      }

      if (data && data.productReviewRatingsMetadata) {
        return data.productReviewRatingsMetadata;
      } else {
        throw new Error('No data found for productReviewRatingsMetadata');
      }
    } catch (e) {
      console.error('Error in productReviewRatingsMetadata:', e);
      return null;
    }
  }
  static async products( search: string, filter: any, pageSize: number, currentPage: number, sort: any ) {

        var client = MagentoGraphQL.client();

    try {
      const { data, errors } = await client.query({
        query: gql(allQueries.productsQuery),
        variables: { search, filter, pageSize, currentPage, sort }
      });

      if (errors && errors.length > 0) {
        console.error('GraphQL Errors:', errors);
        throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
      }

      if (data && data.products) {
        return data.products;
      } else {
        throw new Error('No data found for products');
      }
    } catch (e) {
      console.error('Error in products:', e);
      return null;
    }
  }
  static async route( url: string ) {

        var client = MagentoGraphQL.client();

    try {
      const { data, errors } = await client.query({
        query: gql(allQueries.routeQuery),
        variables: { url }
      });

      if (errors && errors.length > 0) {
        console.error('GraphQL Errors:', errors);
        throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
      }

      if (data && data.route) {
        return data.route;
      } else {
        throw new Error('No data found for route');
      }
    } catch (e) {
      console.error('Error in route:', e);
      return null;
    }
  }
  static async storeConfig() {

        var client = MagentoGraphQL.client();

    try {
      const { data, errors } = await client.query({
        query: gql(allQueries.storeConfigQuery),
        variables: {  }
      });

      if (errors && errors.length > 0) {
        console.error('GraphQL Errors:', errors);
        throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
      }

      if (data && data.storeConfig) {
        return data.storeConfig;
      } else {
        throw new Error('No data found for storeConfig');
      }
    } catch (e) {
      console.error('Error in storeConfig:', e);
      return null;
    }
  }
  static async tokenBaseCards( hash: string ) {

        var client = MagentoGraphQL.client();

    try {
      const { data, errors } = await client.query({
        query: gql(allQueries.tokenBaseCardsQuery),
        variables: { hash }
      });

      if (errors && errors.length > 0) {
        console.error('GraphQL Errors:', errors);
        throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
      }

      if (data && data.tokenBaseCards) {
        return data.tokenBaseCards;
      } else {
        throw new Error('No data found for tokenBaseCards');
      }
    } catch (e) {
      console.error('Error in tokenBaseCards:', e);
      return null;
    }
  }
  static async tokenBaseCheckoutConfig( method: string ) {

        var client = MagentoGraphQL.client();

    try {
      const { data, errors } = await client.query({
        query: gql(allQueries.tokenBaseCheckoutConfigQuery),
        variables: { method }
      });

      if (errors && errors.length > 0) {
        console.error('GraphQL Errors:', errors);
        throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
      }

      if (data && data.tokenBaseCheckoutConfig) {
        return data.tokenBaseCheckoutConfig;
      } else {
        throw new Error('No data found for tokenBaseCheckoutConfig');
      }
    } catch (e) {
      console.error('Error in tokenBaseCheckoutConfig:', e);
      return null;
    }
  }
  static async urlResolver( url: string ) {

        var client = MagentoGraphQL.client();

    try {
      const { data, errors } = await client.query({
        query: gql(allQueries.urlResolverQuery),
        variables: { url }
      });

      if (errors && errors.length > 0) {
        console.error('GraphQL Errors:', errors);
        throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
      }

      if (data && data.urlResolver) {
        return data.urlResolver;
      } else {
        throw new Error('No data found for urlResolver');
      }
    } catch (e) {
      console.error('Error in urlResolver:', e);
      return null;
    }
  }
  static async wishlist() {

        var client = MagentoGraphQL.client();

    try {
      const { data, errors } = await client.query({
        query: gql(allQueries.wishlistQuery),
        variables: {  }
      });

      if (errors && errors.length > 0) {
        console.error('GraphQL Errors:', errors);
        throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
      }

      if (data && data.wishlist) {
        return data.wishlist;
      } else {
        throw new Error('No data found for wishlist');
      }
    } catch (e) {
      console.error('Error in wishlist:', e);
      return null;
    }
  }
}
