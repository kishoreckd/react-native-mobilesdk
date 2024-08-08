// Auto-generated file, do not edit manually
import { gql } from '@apollo/client';
import MagentoGraphQL from '../../../lib/typescript/src';
import * as allMutation from '../../generated/mutations/mutations';

class GeneratedMutationClasses {

    static async addBundleProductsToCart(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.addBundleProductsToCartMutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.addBundleProductsToCart) {
                return true;
            } else {
                throw new Error('No data found for addBundleProductsToCart');
            }
        } catch (e) {
            console.error('Error in addBundleProductsToCart:', e);
            return false;
        }
    }

    static async addConfigurableProductsToCart(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.addConfigurableProductsToCartMutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.addConfigurableProductsToCart) {
                return true;
            } else {
                throw new Error('No data found for addConfigurableProductsToCart');
            }
        } catch (e) {
            console.error('Error in addConfigurableProductsToCart:', e);
            return false;
        }
    }

    static async addDownloadableProductsToCart(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.addDownloadableProductsToCartMutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.addDownloadableProductsToCart) {
                return true;
            } else {
                throw new Error('No data found for addDownloadableProductsToCart');
            }
        } catch (e) {
            console.error('Error in addDownloadableProductsToCart:', e);
            return false;
        }
    }

    static async addGiftRegistryRegistrants(giftRegistryUid: string, registrants: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.addGiftRegistryRegistrantsMutation),
                variables: { giftRegistryUid, registrants }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.addGiftRegistryRegistrants) {
                return true;
            } else {
                throw new Error('No data found for addGiftRegistryRegistrants');
            }
        } catch (e) {
            console.error('Error in addGiftRegistryRegistrants:', e);
            return false;
        }
    }

    static async addProductsToCart(cartId: string, cartItems: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.addProductsToCartMutation),
                variables: { cartId, cartItems }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.addProductsToCart) {
                return true;
            } else {
                throw new Error('No data found for addProductsToCart');
            }
        } catch (e) {
            console.error('Error in addProductsToCart:', e);
            return false;
        }
    }

    static async addProductsToCompareList(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.addProductsToCompareListMutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.addProductsToCompareList) {
                return true;
            } else {
                throw new Error('No data found for addProductsToCompareList');
            }
        } catch (e) {
            console.error('Error in addProductsToCompareList:', e);
            return false;
        }
    }

    static async addProductsToWishlist(wishlistId: string, wishlistItems: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.addProductsToWishlistMutation),
                variables: { wishlistId, wishlistItems }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.addProductsToWishlist) {
                return true;
            } else {
                throw new Error('No data found for addProductsToWishlist');
            }
        } catch (e) {
            console.error('Error in addProductsToWishlist:', e);
            return false;
        }
    }

    static async addReturnComment(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.addReturnCommentMutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.addReturnComment) {
                return true;
            } else {
                throw new Error('No data found for addReturnComment');
            }
        } catch (e) {
            console.error('Error in addReturnComment:', e);
            return false;
        }
    }

    static async addReturnTracking(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.addReturnTrackingMutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.addReturnTracking) {
                return true;
            } else {
                throw new Error('No data found for addReturnTracking');
            }
        } catch (e) {
            console.error('Error in addReturnTracking:', e);
            return false;
        }
    }

    static async addSimpleProductsToCart(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.addSimpleProductsToCartMutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.addSimpleProductsToCart) {
                return true;
            } else {
                throw new Error('No data found for addSimpleProductsToCart');
            }
        } catch (e) {
            console.error('Error in addSimpleProductsToCart:', e);
            return false;
        }
    }

    static async addVirtualProductsToCart(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.addVirtualProductsToCartMutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.addVirtualProductsToCart) {
                return true;
            } else {
                throw new Error('No data found for addVirtualProductsToCart');
            }
        } catch (e) {
            console.error('Error in addVirtualProductsToCart:', e);
            return false;
        }
    }

    static async addWishlistItemsToCart(wishlistId: string, wishlistItemIds: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.addWishlistItemsToCartMutation),
                variables: { wishlistId, wishlistItemIds }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.addWishlistItemsToCart) {
                return true;
            } else {
                throw new Error('No data found for addWishlistItemsToCart');
            }
        } catch (e) {
            console.error('Error in addWishlistItemsToCart:', e);
            return false;
        }
    }

    static async applyCouponToCart(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.applyCouponToCartMutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.applyCouponToCart) {
                return true;
            } else {
                throw new Error('No data found for applyCouponToCart');
            }
        } catch (e) {
            console.error('Error in applyCouponToCart:', e);
            return false;
        }
    }

    static async applyGiftCardToCart(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.applyGiftCardToCartMutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.applyGiftCardToCart) {
                return true;
            } else {
                throw new Error('No data found for applyGiftCardToCart');
            }
        } catch (e) {
            console.error('Error in applyGiftCardToCart:', e);
            return false;
        }
    }

    static async applyRewardPointsToCart(cartId: string) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.applyRewardPointsToCartMutation),
                variables: { cartId }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.applyRewardPointsToCart) {
                return true;
            } else {
                throw new Error('No data found for applyRewardPointsToCart');
            }
        } catch (e) {
            console.error('Error in applyRewardPointsToCart:', e);
            return false;
        }
    }

    static async applyStoreCreditToCart(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.applyStoreCreditToCartMutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.applyStoreCreditToCart) {
                return true;
            } else {
                throw new Error('No data found for applyStoreCreditToCart');
            }
        } catch (e) {
            console.error('Error in applyStoreCreditToCart:', e);
            return false;
        }
    }

    static async assignCompareListToCustomer(uid: string) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.assignCompareListToCustomerMutation),
                variables: { uid }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.assignCompareListToCustomer) {
                return true;
            } else {
                throw new Error('No data found for assignCompareListToCustomer');
            }
        } catch (e) {
            console.error('Error in assignCompareListToCustomer:', e);
            return false;
        }
    }

    static async assignCustomerToGuestCart(cart_id: string) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.assignCustomerToGuestCartMutation),
                variables: { cart_id }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.assignCustomerToGuestCart) {
                return true;
            } else {
                throw new Error('No data found for assignCustomerToGuestCart');
            }
        } catch (e) {
            console.error('Error in assignCustomerToGuestCart:', e);
            return false;
        }
    }

    static async changeCustomerPassword(currentPassword: string, newPassword: string) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.changeCustomerPasswordMutation),
                variables: { currentPassword, newPassword }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.changeCustomerPassword) {
                return true;
            } else {
                throw new Error('No data found for changeCustomerPassword');
            }
        } catch (e) {
            console.error('Error in changeCustomerPassword:', e);
            return false;
        }
    }

    static async copyProductsBetweenWishlists(sourceWishlistUid: string, destinationWishlistUid: string, wishlistItems: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.copyProductsBetweenWishlistsMutation),
                variables: { sourceWishlistUid, destinationWishlistUid, wishlistItems }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.copyProductsBetweenWishlists) {
                return true;
            } else {
                throw new Error('No data found for copyProductsBetweenWishlists');
            }
        } catch (e) {
            console.error('Error in copyProductsBetweenWishlists:', e);
            return false;
        }
    }

    static async createBraintreeClientToken() {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.createBraintreeClientTokenMutation),
                variables: {}
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.createBraintreeClientToken) {
                return true;
            } else {
                throw new Error('No data found for createBraintreeClientToken');
            }
        } catch (e) {
            console.error('Error in createBraintreeClientToken:', e);
            return false;
        }
    }

    static async createCompareList(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.createCompareListMutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.createCompareList) {
                return true;
            } else {
                throw new Error('No data found for createCompareList');
            }
        } catch (e) {
            console.error('Error in createCompareList:', e);
            return false;
        }
    }

    static async createCustomer(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.createCustomerMutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.createCustomer) {
                return true;
            } else {
                throw new Error('No data found for createCustomer');
            }
        } catch (e) {
            console.error('Error in createCustomer:', e);
            return false;
        }
    }

    static async createCustomerAddress(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.createCustomerAddressMutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.createCustomerAddress) {
                return true;
            } else {
                throw new Error('No data found for createCustomerAddress');
            }
        } catch (e) {
            console.error('Error in createCustomerAddress:', e);
            return false;
        }
    }

    static async createCustomerV2(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.createCustomerV2Mutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.createCustomerV2) {
                return true;
            } else {
                throw new Error('No data found for createCustomerV2');
            }
        } catch (e) {
            console.error('Error in createCustomerV2:', e);
            return false;
        }
    }

    static async createEmptyCart(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.createEmptyCartMutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.createEmptyCart) {
                return true;
            } else {
                throw new Error('No data found for createEmptyCart');
            }
        } catch (e) {
            console.error('Error in createEmptyCart:', e);
            return false;
        }
    }

    static async createGiftRegistry(giftRegistry: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.createGiftRegistryMutation),
                variables: { giftRegistry }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.createGiftRegistry) {
                return true;
            } else {
                throw new Error('No data found for createGiftRegistry');
            }
        } catch (e) {
            console.error('Error in createGiftRegistry:', e);
            return false;
        }
    }

    static async createPayflowProToken(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.createPayflowProTokenMutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.createPayflowProToken) {
                return true;
            } else {
                throw new Error('No data found for createPayflowProToken');
            }
        } catch (e) {
            console.error('Error in createPayflowProToken:', e);
            return false;
        }
    }

    static async createPaypalExpressToken(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.createPaypalExpressTokenMutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.createPaypalExpressToken) {
                return true;
            } else {
                throw new Error('No data found for createPaypalExpressToken');
            }
        } catch (e) {
            console.error('Error in createPaypalExpressToken:', e);
            return false;
        }
    }

    static async createProductReview(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.createProductReviewMutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.createProductReview) {
                return true;
            } else {
                throw new Error('No data found for createProductReview');
            }
        } catch (e) {
            console.error('Error in createProductReview:', e);
            return false;
        }
    }

    static async createTokenBaseCard(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.createTokenBaseCardMutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.createTokenBaseCard) {
                return true;
            } else {
                throw new Error('No data found for createTokenBaseCard');
            }
        } catch (e) {
            console.error('Error in createTokenBaseCard:', e);
            return false;
        }
    }

    static async createWishlist(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.createWishlistMutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.createWishlist) {
                return true;
            } else {
                throw new Error('No data found for createWishlist');
            }
        } catch (e) {
            console.error('Error in createWishlist:', e);
            return false;
        }
    }

    static async deleteCompareList(uid: string) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.deleteCompareListMutation),
                variables: { uid }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.deleteCompareList) {
                return true;
            } else {
                throw new Error('No data found for deleteCompareList');
            }
        } catch (e) {
            console.error('Error in deleteCompareList:', e);
            return false;
        }
    }

    static async deleteCustomerAddress(id: number) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.deleteCustomerAddressMutation),
                variables: { id }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.deleteCustomerAddress) {
                return true;
            } else {
                throw new Error('No data found for deleteCustomerAddress');
            }
        } catch (e) {
            console.error('Error in deleteCustomerAddress:', e);
            return false;
        }
    }

    static async deletePaymentToken(public_hash: string) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.deletePaymentTokenMutation),
                variables: { public_hash }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.deletePaymentToken) {
                return true;
            } else {
                throw new Error('No data found for deletePaymentToken');
            }
        } catch (e) {
            console.error('Error in deletePaymentToken:', e);
            return false;
        }
    }

    static async deleteTokenBaseCard(hash: string) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.deleteTokenBaseCardMutation),
                variables: { hash }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.deleteTokenBaseCard) {
                return true;
            } else {
                throw new Error('No data found for deleteTokenBaseCard');
            }
        } catch (e) {
            console.error('Error in deleteTokenBaseCard:', e);
            return false;
        }
    }

    static async deleteWishlist(wishlistId: string) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.deleteWishlistMutation),
                variables: { wishlistId }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.deleteWishlist) {
                return true;
            } else {
                throw new Error('No data found for deleteWishlist');
            }
        } catch (e) {
            console.error('Error in deleteWishlist:', e);
            return false;
        }
    }

    static async generateCustomerToken(email: string, password: string) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.generateCustomerTokenMutation),
                variables: { email, password }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.generateCustomerToken) {
                return true;
            } else {
                throw new Error('No data found for generateCustomerToken');
            }
        } catch (e) {
            console.error('Error in generateCustomerToken:', e);
            return false;
        }
    }

    static async generateCustomerTokenAsAdmin(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.generateCustomerTokenAsAdminMutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.generateCustomerTokenAsAdmin) {
                return true;
            } else {
                throw new Error('No data found for generateCustomerTokenAsAdmin');
            }
        } catch (e) {
            console.error('Error in generateCustomerTokenAsAdmin:', e);
            return false;
        }
    }

    static async handlePayflowProResponse(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.handlePayflowProResponseMutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.handlePayflowProResponse) {
                return true;
            } else {
                throw new Error('No data found for handlePayflowProResponse');
            }
        } catch (e) {
            console.error('Error in handlePayflowProResponse:', e);
            return false;
        }
    }

    static async mergeCarts(source_cart_id: string, destination_cart_id: string) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.mergeCartsMutation),
                variables: { source_cart_id, destination_cart_id }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.mergeCarts) {
                return true;
            } else {
                throw new Error('No data found for mergeCarts');
            }
        } catch (e) {
            console.error('Error in mergeCarts:', e);
            return false;
        }
    }

    static async moveCartItemsToGiftRegistry(cartUid: string, giftRegistryUid: string) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.moveCartItemsToGiftRegistryMutation),
                variables: { cartUid, giftRegistryUid }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.moveCartItemsToGiftRegistry) {
                return true;
            } else {
                throw new Error('No data found for moveCartItemsToGiftRegistry');
            }
        } catch (e) {
            console.error('Error in moveCartItemsToGiftRegistry:', e);
            return false;
        }
    }

    static async moveProductsBetweenWishlists(sourceWishlistUid: string, destinationWishlistUid: string, wishlistItems: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.moveProductsBetweenWishlistsMutation),
                variables: { sourceWishlistUid, destinationWishlistUid, wishlistItems }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.moveProductsBetweenWishlists) {
                return true;
            } else {
                throw new Error('No data found for moveProductsBetweenWishlists');
            }
        } catch (e) {
            console.error('Error in moveProductsBetweenWishlists:', e);
            return false;
        }
    }

    static async placeOrder(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.placeOrderMutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.placeOrder) {
                return true;
            } else {
                throw new Error('No data found for placeOrder');
            }
        } catch (e) {
            console.error('Error in placeOrder:', e);
            return false;
        }
    }

    static async redeemGiftCardBalanceAsStoreCredit(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.redeemGiftCardBalanceAsStoreCreditMutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.redeemGiftCardBalanceAsStoreCredit) {
                return true;
            } else {
                throw new Error('No data found for redeemGiftCardBalanceAsStoreCredit');
            }
        } catch (e) {
            console.error('Error in redeemGiftCardBalanceAsStoreCredit:', e);
            return false;
        }
    }

    static async removeCouponFromCart(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.removeCouponFromCartMutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.removeCouponFromCart) {
                return true;
            } else {
                throw new Error('No data found for removeCouponFromCart');
            }
        } catch (e) {
            console.error('Error in removeCouponFromCart:', e);
            return false;
        }
    }

    static async removeGiftCardFromCart(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.removeGiftCardFromCartMutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.removeGiftCardFromCart) {
                return true;
            } else {
                throw new Error('No data found for removeGiftCardFromCart');
            }
        } catch (e) {
            console.error('Error in removeGiftCardFromCart:', e);
            return false;
        }
    }

    static async removeGiftRegistry(giftRegistryUid: string) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.removeGiftRegistryMutation),
                variables: { giftRegistryUid }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.removeGiftRegistry) {
                return true;
            } else {
                throw new Error('No data found for removeGiftRegistry');
            }
        } catch (e) {
            console.error('Error in removeGiftRegistry:', e);
            return false;
        }
    }

    static async removeGiftRegistryItems(giftRegistryUid: string, itemsUid: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.removeGiftRegistryItemsMutation),
                variables: { giftRegistryUid, itemsUid }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.removeGiftRegistryItems) {
                return true;
            } else {
                throw new Error('No data found for removeGiftRegistryItems');
            }
        } catch (e) {
            console.error('Error in removeGiftRegistryItems:', e);
            return false;
        }
    }

    static async removeGiftRegistryRegistrants(giftRegistryUid: string, registrantsUid: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.removeGiftRegistryRegistrantsMutation),
                variables: { giftRegistryUid, registrantsUid }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.removeGiftRegistryRegistrants) {
                return true;
            } else {
                throw new Error('No data found for removeGiftRegistryRegistrants');
            }
        } catch (e) {
            console.error('Error in removeGiftRegistryRegistrants:', e);
            return false;
        }
    }

    static async removeItemFromCart(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.removeItemFromCartMutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.removeItemFromCart) {
                return true;
            } else {
                throw new Error('No data found for removeItemFromCart');
            }
        } catch (e) {
            console.error('Error in removeItemFromCart:', e);
            return false;
        }
    }

    static async removeProductsFromCompareList(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.removeProductsFromCompareListMutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.removeProductsFromCompareList) {
                return true;
            } else {
                throw new Error('No data found for removeProductsFromCompareList');
            }
        } catch (e) {
            console.error('Error in removeProductsFromCompareList:', e);
            return false;
        }
    }

    static async removeProductsFromWishlist(wishlistId: string, wishlistItemsIds: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.removeProductsFromWishlistMutation),
                variables: { wishlistId, wishlistItemsIds }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.removeProductsFromWishlist) {
                return true;
            } else {
                throw new Error('No data found for removeProductsFromWishlist');
            }
        } catch (e) {
            console.error('Error in removeProductsFromWishlist:', e);
            return false;
        }
    }

    static async removeReturnTracking(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.removeReturnTrackingMutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.removeReturnTracking) {
                return true;
            } else {
                throw new Error('No data found for removeReturnTracking');
            }
        } catch (e) {
            console.error('Error in removeReturnTracking:', e);
            return false;
        }
    }

    static async removeRewardPointsFromCart(cartId: string) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.removeRewardPointsFromCartMutation),
                variables: { cartId }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.removeRewardPointsFromCart) {
                return true;
            } else {
                throw new Error('No data found for removeRewardPointsFromCart');
            }
        } catch (e) {
            console.error('Error in removeRewardPointsFromCart:', e);
            return false;
        }
    }

    static async removeStoreCreditFromCart(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.removeStoreCreditFromCartMutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.removeStoreCreditFromCart) {
                return true;
            } else {
                throw new Error('No data found for removeStoreCreditFromCart');
            }
        } catch (e) {
            console.error('Error in removeStoreCreditFromCart:', e);
            return false;
        }
    }

    static async reorderItems(orderNumber: string) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.reorderItemsMutation),
                variables: { orderNumber }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.reorderItems) {
                return true;
            } else {
                throw new Error('No data found for reorderItems');
            }
        } catch (e) {
            console.error('Error in reorderItems:', e);
            return false;
        }
    }

    static async requestPasswordResetEmail(email: string) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.requestPasswordResetEmailMutation),
                variables: { email }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.requestPasswordResetEmail) {
                return true;
            } else {
                throw new Error('No data found for requestPasswordResetEmail');
            }
        } catch (e) {
            console.error('Error in requestPasswordResetEmail:', e);
            return false;
        }
    }

    static async requestReturn(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.requestReturnMutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.requestReturn) {
                return true;
            } else {
                throw new Error('No data found for requestReturn');
            }
        } catch (e) {
            console.error('Error in requestReturn:', e);
            return false;
        }
    }

    static async resetPassword(email: string, resetPasswordToken: string, newPassword: string) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.resetPasswordMutation),
                variables: { email, resetPasswordToken, newPassword }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.resetPassword) {
                return true;
            } else {
                throw new Error('No data found for resetPassword');
            }
        } catch (e) {
            console.error('Error in resetPassword:', e);
            return false;
        }
    }

    static async revokeCustomerToken() {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.revokeCustomerTokenMutation),
                variables: {}
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.revokeCustomerToken) {
                return true;
            } else {
                throw new Error('No data found for revokeCustomerToken');
            }
        } catch (e) {
            console.error('Error in revokeCustomerToken:', e);
            return false;
        }
    }

    static async sendEmailToFriend(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.sendEmailToFriendMutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.sendEmailToFriend) {
                return true;
            } else {
                throw new Error('No data found for sendEmailToFriend');
            }
        } catch (e) {
            console.error('Error in sendEmailToFriend:', e);
            return false;
        }
    }

    static async setBillingAddressOnCart(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.setBillingAddressOnCartMutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.setBillingAddressOnCart) {
                return true;
            } else {
                throw new Error('No data found for setBillingAddressOnCart');
            }
        } catch (e) {
            console.error('Error in setBillingAddressOnCart:', e);
            return false;
        }
    }

    static async setGiftOptionsOnCart(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.setGiftOptionsOnCartMutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.setGiftOptionsOnCart) {
                return true;
            } else {
                throw new Error('No data found for setGiftOptionsOnCart');
            }
        } catch (e) {
            console.error('Error in setGiftOptionsOnCart:', e);
            return false;
        }
    }

    static async setGuestEmailOnCart(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.setGuestEmailOnCartMutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.setGuestEmailOnCart) {
                return true;
            } else {
                throw new Error('No data found for setGuestEmailOnCart');
            }
        } catch (e) {
            console.error('Error in setGuestEmailOnCart:', e);
            return false;
        }
    }

    static async setPaymentMethodAndPlaceOrder(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.setPaymentMethodAndPlaceOrderMutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.setPaymentMethodAndPlaceOrder) {
                return true;
            } else {
                throw new Error('No data found for setPaymentMethodAndPlaceOrder');
            }
        } catch (e) {
            console.error('Error in setPaymentMethodAndPlaceOrder:', e);
            return false;
        }
    }

    static async setPaymentMethodOnCart(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.setPaymentMethodOnCartMutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.setPaymentMethodOnCart) {
                return true;
            } else {
                throw new Error('No data found for setPaymentMethodOnCart');
            }
        } catch (e) {
            console.error('Error in setPaymentMethodOnCart:', e);
            return false;
        }
    }

    static async setShippingAddressesOnCart(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.setShippingAddressesOnCartMutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.setShippingAddressesOnCart) {
                return true;
            } else {
                throw new Error('No data found for setShippingAddressesOnCart');
            }
        } catch (e) {
            console.error('Error in setShippingAddressesOnCart:', e);
            return false;
        }
    }

    static async setShippingMethodsOnCart(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.setShippingMethodsOnCartMutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.setShippingMethodsOnCart) {
                return true;
            } else {
                throw new Error('No data found for setShippingMethodsOnCart');
            }
        } catch (e) {
            console.error('Error in setShippingMethodsOnCart:', e);
            return false;
        }
    }

    static async shareGiftRegistry(giftRegistryUid: string, sender: any, invitees: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.shareGiftRegistryMutation),
                variables: { giftRegistryUid, sender, invitees }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.shareGiftRegistry) {
                return true;
            } else {
                throw new Error('No data found for shareGiftRegistry');
            }
        } catch (e) {
            console.error('Error in shareGiftRegistry:', e);
            return false;
        }
    }

    static async subscribeEmailToNewsletter(email: string) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.subscribeEmailToNewsletterMutation),
                variables: { email }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.subscribeEmailToNewsletter) {
                return true;
            } else {
                throw new Error('No data found for subscribeEmailToNewsletter');
            }
        } catch (e) {
            console.error('Error in subscribeEmailToNewsletter:', e);
            return false;
        }
    }

    static async updateCartItems(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.updateCartItemsMutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.updateCartItems) {
                return true;
            } else {
                throw new Error('No data found for updateCartItems');
            }
        } catch (e) {
            console.error('Error in updateCartItems:', e);
            return false;
        }
    }

    static async updateCustomer(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.updateCustomerMutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.updateCustomer) {
                return true;
            } else {
                throw new Error('No data found for updateCustomer');
            }
        } catch (e) {
            console.error('Error in updateCustomer:', e);
            return false;
        }
    }

    static async updateCustomerAddress(id: number, input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.updateCustomerAddressMutation),
                variables: { id, input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.updateCustomerAddress) {
                return true;
            } else {
                throw new Error('No data found for updateCustomerAddress');
            }
        } catch (e) {
            console.error('Error in updateCustomerAddress:', e);
            return false;
        }
    }

    static async updateCustomerEmail(email: string, password: string) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.updateCustomerEmailMutation),
                variables: { email, password }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.updateCustomerEmail) {
                return true;
            } else {
                throw new Error('No data found for updateCustomerEmail');
            }
        } catch (e) {
            console.error('Error in updateCustomerEmail:', e);
            return false;
        }
    }

    static async updateCustomerV2(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.updateCustomerV2Mutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.updateCustomerV2) {
                return true;
            } else {
                throw new Error('No data found for updateCustomerV2');
            }
        } catch (e) {
            console.error('Error in updateCustomerV2:', e);
            return false;
        }
    }

    static async updateGiftRegistry(giftRegistryUid: string, giftRegistry: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.updateGiftRegistryMutation),
                variables: { giftRegistryUid, giftRegistry }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.updateGiftRegistry) {
                return true;
            } else {
                throw new Error('No data found for updateGiftRegistry');
            }
        } catch (e) {
            console.error('Error in updateGiftRegistry:', e);
            return false;
        }
    }

    static async updateGiftRegistryItems(giftRegistryUid: string, items: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.updateGiftRegistryItemsMutation),
                variables: { giftRegistryUid, items }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.updateGiftRegistryItems) {
                return true;
            } else {
                throw new Error('No data found for updateGiftRegistryItems');
            }
        } catch (e) {
            console.error('Error in updateGiftRegistryItems:', e);
            return false;
        }
    }

    static async updateGiftRegistryRegistrants(giftRegistryUid: string, registrants: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.updateGiftRegistryRegistrantsMutation),
                variables: { giftRegistryUid, registrants }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.updateGiftRegistryRegistrants) {
                return true;
            } else {
                throw new Error('No data found for updateGiftRegistryRegistrants');
            }
        } catch (e) {
            console.error('Error in updateGiftRegistryRegistrants:', e);
            return false;
        }
    }

    static async updateProductsInWishlist(wishlistId: string, wishlistItems: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.updateProductsInWishlistMutation),
                variables: { wishlistId, wishlistItems }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.updateProductsInWishlist) {
                return true;
            } else {
                throw new Error('No data found for updateProductsInWishlist');
            }
        } catch (e) {
            console.error('Error in updateProductsInWishlist:', e);
            return false;
        }
    }

    static async updateTokenBaseCard(input: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.updateTokenBaseCardMutation),
                variables: { input }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.updateTokenBaseCard) {
                return true;
            } else {
                throw new Error('No data found for updateTokenBaseCard');
            }
        } catch (e) {
            console.error('Error in updateTokenBaseCard:', e);
            return false;
        }
    }

    static async updateWishlist(wishlistId: string, name: string, visibility: any) {

        var client = MagentoGraphQL.client();
        try {
            const { data, errors } = await client.mutate({
                mutation: gql(allMutation.updateWishlistMutation),
                variables: { wishlistId, name, visibility }
            });

            if (errors && errors.length > 0) {
                console.error('GraphQL Errors:', errors);
                throw new Error(errors.map((error: { message: any; }) => error.message).join(', '));
            }

            if (data && data.updateWishlist) {
                return true;
            } else {
                throw new Error('No data found for updateWishlist');
            }
        } catch (e) {
            console.error('Error in updateWishlist:', e);
            return false;
        }
    }

}
