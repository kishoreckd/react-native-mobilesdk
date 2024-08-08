
export const addBundleProductsToCartMutation = `
  mutation addBundleProductsToCartQuery($input: AddBundleProductsToCartInput) {
    addBundleProductsToCart(input: $input) 
  }
`;
    


export const addConfigurableProductsToCartMutation = `
  mutation addConfigurableProductsToCartQuery($input: AddConfigurableProductsToCartInput) {
    addConfigurableProductsToCart(input: $input) 
  }
`;
    


export const addDownloadableProductsToCartMutation = `
  mutation addDownloadableProductsToCartQuery($input: AddDownloadableProductsToCartInput) {
    addDownloadableProductsToCart(input: $input) 
  }
`;
    


export const addGiftRegistryRegistrantsMutation = `
  mutation addGiftRegistryRegistrantsQuery($giftRegistryUid: ID!, $registrants: [AddGiftRegistryRegistrantInput!]!) {
    addGiftRegistryRegistrants(giftRegistryUid: $giftRegistryUid, registrants: $registrants) 
  }
`;
    


export const addProductsToCartMutation = `
  mutation addProductsToCartQuery($cartId: String!, $cartItems: [CartItemInput!]!) {
    addProductsToCart(cartId: $cartId, cartItems: $cartItems) 
  }
`;
    


export const addProductsToCompareListMutation = `
  mutation addProductsToCompareListQuery($input: AddProductsToCompareListInput) {
    addProductsToCompareList(input: $input) { item_count
uid }
  }
`;
    


export const addProductsToWishlistMutation = `
  mutation addProductsToWishlistQuery($wishlistId: ID!, $wishlistItems: [WishlistItemInput!]!) {
    addProductsToWishlist(wishlistId: $wishlistId, wishlistItems: $wishlistItems) 
  }
`;
    


export const addReturnCommentMutation = `
  mutation addReturnCommentQuery($input: AddReturnCommentInput!) {
    addReturnComment(input: $input) 
  }
`;
    


export const addReturnTrackingMutation = `
  mutation addReturnTrackingQuery($input: AddReturnTrackingInput!) {
    addReturnTracking(input: $input) 
  }
`;
    


export const addSimpleProductsToCartMutation = `
  mutation addSimpleProductsToCartQuery($input: AddSimpleProductsToCartInput) {
    addSimpleProductsToCart(input: $input) 
  }
`;
    


export const addVirtualProductsToCartMutation = `
  mutation addVirtualProductsToCartQuery($input: AddVirtualProductsToCartInput) {
    addVirtualProductsToCart(input: $input) 
  }
`;
    


export const addWishlistItemsToCartMutation = `
  mutation addWishlistItemsToCartQuery($wishlistId: ID!, $wishlistItemIds: [ID!]) {
    addWishlistItemsToCart(wishlistId: $wishlistId, wishlistItemIds: $wishlistItemIds) { status }
  }
`;
    


export const applyCouponToCartMutation = `
  mutation applyCouponToCartQuery($input: ApplyCouponToCartInput) {
    applyCouponToCart(input: $input) 
  }
`;
    


export const applyGiftCardToCartMutation = `
  mutation applyGiftCardToCartQuery($input: ApplyGiftCardToCartInput) {
    applyGiftCardToCart(input: $input) 
  }
`;
    


export const applyRewardPointsToCartMutation = `
  mutation applyRewardPointsToCartQuery($cartId: ID!) {
    applyRewardPointsToCart(cartId: $cartId) 
  }
`;
    


export const applyStoreCreditToCartMutation = `
  mutation applyStoreCreditToCartQuery($input: ApplyStoreCreditToCartInput!) {
    applyStoreCreditToCart(input: $input) 
  }
`;
    


export const assignCompareListToCustomerMutation = `
  mutation assignCompareListToCustomerQuery($uid: ID!) {
    assignCompareListToCustomer(uid: $uid) { result }
  }
`;
    


export const assignCustomerToGuestCartMutation = `
  mutation assignCustomerToGuestCartQuery($cart_id: String!) {
    assignCustomerToGuestCart(cart_id: $cart_id) 
  }
`;
    


export const changeCustomerPasswordMutation = `
  mutation changeCustomerPasswordQuery($currentPassword: String!, $newPassword: String!) {
    changeCustomerPassword(currentPassword: $currentPassword, newPassword: $newPassword) { allow_remote_shopping_assistance
created_at
date_of_birth
default_billing
default_shipping
dob
email
firstname
gender
group_id
id
is_subscribed
lastname
middlename
prefix
suffix
taxvat }
  }
`;
    


export const copyProductsBetweenWishlistsMutation = `
  mutation copyProductsBetweenWishlistsQuery($sourceWishlistUid: ID!, $destinationWishlistUid: ID!, $wishlistItems: [WishlistItemCopyInput!]!) {
    copyProductsBetweenWishlists(sourceWishlistUid: $sourceWishlistUid, destinationWishlistUid: $destinationWishlistUid, wishlistItems: $wishlistItems) 
  }
`;
    


export const createBraintreeClientTokenMutation = `
  mutation createBraintreeClientTokenQuery() {
    createBraintreeClientToken() 
  }
`;
    


export const createCompareListMutation = `
  mutation createCompareListQuery($input: CreateCompareListInput) {
    createCompareList(input: $input) { item_count
uid }
  }
`;
    


export const createCustomerMutation = `
  mutation createCustomerQuery($input: CustomerInput!) {
    createCustomer(input: $input) 
  }
`;
    


export const createCustomerAddressMutation = `
  mutation createCustomerAddressQuery($input: CustomerAddressInput!) {
    createCustomerAddress(input: $input) { city
company
country_id
customer_id
default_billing
default_shipping
fax
firstname
id
lastname
middlename
postcode
prefix
region_id
street
suffix
telephone
vat_id }
  }
`;
    


export const createCustomerV2Mutation = `
  mutation createCustomerV2Query($input: CustomerCreateInput!) {
    createCustomerV2(input: $input) 
  }
`;
    


export const createEmptyCartMutation = `
  mutation createEmptyCartQuery($input: createEmptyCartInput) {
    createEmptyCart(input: $input) 
  }
`;
    


export const createGiftRegistryMutation = `
  mutation createGiftRegistryQuery($giftRegistry: CreateGiftRegistryInput!) {
    createGiftRegistry(giftRegistry: $giftRegistry) 
  }
`;
    


export const createPayflowProTokenMutation = `
  mutation createPayflowProTokenQuery($input: PayflowProTokenInput!) {
    createPayflowProToken(input: $input) { response_message
result
result_code
secure_token
secure_token_id }
  }
`;
    


export const createPaypalExpressTokenMutation = `
  mutation createPaypalExpressTokenQuery($input: PaypalExpressTokenInput!) {
    createPaypalExpressToken(input: $input) { token }
  }
`;
    


export const createProductReviewMutation = `
  mutation createProductReviewQuery($input: CreateProductReviewInput!) {
    createProductReview(input: $input) 
  }
`;
    


export const createTokenBaseCardMutation = `
  mutation createTokenBaseCardQuery($input: TokenBaseCardCreateInput!) {
    createTokenBaseCard(input: $input) { active
created_at
customer_email
customer_id
customer_ip
expires
hash
label
last_use
method
payment_id
profile_id
updated_at }
  }
`;
    


export const createWishlistMutation = `
  mutation createWishlistQuery($input: CreateWishlistInput!) {
    createWishlist(input: $input) 
  }
`;
    


export const deleteCompareListMutation = `
  mutation deleteCompareListQuery($uid: ID!) {
    deleteCompareList(uid: $uid) { result }
  }
`;
    


export const deleteCustomerAddressMutation = `
  mutation deleteCustomerAddressQuery($id: Int!) {
    deleteCustomerAddress(id: $id) 
  }
`;
    


export const deletePaymentTokenMutation = `
  mutation deletePaymentTokenQuery($public_hash: String!) {
    deletePaymentToken(public_hash: $public_hash) { result }
  }
`;
    


export const deleteTokenBaseCardMutation = `
  mutation deleteTokenBaseCardQuery($hash: String!) {
    deleteTokenBaseCard(hash: $hash) 
  }
`;
    


export const deleteWishlistMutation = `
  mutation deleteWishlistQuery($wishlistId: ID!) {
    deleteWishlist(wishlistId: $wishlistId) { status }
  }
`;
    


export const generateCustomerTokenMutation = `
  mutation generateCustomerTokenQuery($email: String!, $password: String!) {
    generateCustomerToken(email: $email, password: $password) { token }
  }
`;
    


export const generateCustomerTokenAsAdminMutation = `
  mutation generateCustomerTokenAsAdminQuery($input: GenerateCustomerTokenAsAdminInput!) {
    generateCustomerTokenAsAdmin(input: $input) { customer_token }
  }
`;
    


export const handlePayflowProResponseMutation = `
  mutation handlePayflowProResponseQuery($input: PayflowProResponseInput!) {
    handlePayflowProResponse(input: $input) 
  }
`;
    


export const mergeCartsMutation = `
  mutation mergeCartsQuery($source_cart_id: String!, $destination_cart_id: String) {
    mergeCarts(source_cart_id: $source_cart_id, destination_cart_id: $destination_cart_id) 
  }
`;
    


export const moveCartItemsToGiftRegistryMutation = `
  mutation moveCartItemsToGiftRegistryQuery($cartUid: ID!, $giftRegistryUid: ID!) {
    moveCartItemsToGiftRegistry(cartUid: $cartUid, giftRegistryUid: $giftRegistryUid) { status }
  }
`;
    


export const moveProductsBetweenWishlistsMutation = `
  mutation moveProductsBetweenWishlistsQuery($sourceWishlistUid: ID!, $destinationWishlistUid: ID!, $wishlistItems: [WishlistItemMoveInput!]!) {
    moveProductsBetweenWishlists(sourceWishlistUid: $sourceWishlistUid, destinationWishlistUid: $destinationWishlistUid, wishlistItems: $wishlistItems) 
  }
`;
    


export const placeOrderMutation = `
  mutation placeOrderQuery($input: PlaceOrderInput) {
    placeOrder(input: $input) 
  }
`;
    


export const redeemGiftCardBalanceAsStoreCreditMutation = `
  mutation redeemGiftCardBalanceAsStoreCreditQuery($input: GiftCardAccountInput!) {
    redeemGiftCardBalanceAsStoreCredit(input: $input) { code
expiration_date }
  }
`;
    


export const removeCouponFromCartMutation = `
  mutation removeCouponFromCartQuery($input: RemoveCouponFromCartInput) {
    removeCouponFromCart(input: $input) 
  }
`;
    


export const removeGiftCardFromCartMutation = `
  mutation removeGiftCardFromCartQuery($input: RemoveGiftCardFromCartInput) {
    removeGiftCardFromCart(input: $input) 
  }
`;
    


export const removeGiftRegistryMutation = `
  mutation removeGiftRegistryQuery($giftRegistryUid: ID!) {
    removeGiftRegistry(giftRegistryUid: $giftRegistryUid) { success }
  }
`;
    


export const removeGiftRegistryItemsMutation = `
  mutation removeGiftRegistryItemsQuery($giftRegistryUid: ID!, $itemsUid: [ID!]!) {
    removeGiftRegistryItems(giftRegistryUid: $giftRegistryUid, itemsUid: $itemsUid) 
  }
`;
    


export const removeGiftRegistryRegistrantsMutation = `
  mutation removeGiftRegistryRegistrantsQuery($giftRegistryUid: ID!, $registrantsUid: [ID!]!) {
    removeGiftRegistryRegistrants(giftRegistryUid: $giftRegistryUid, registrantsUid: $registrantsUid) 
  }
`;
    


export const removeItemFromCartMutation = `
  mutation removeItemFromCartQuery($input: RemoveItemFromCartInput) {
    removeItemFromCart(input: $input) 
  }
`;
    


export const removeProductsFromCompareListMutation = `
  mutation removeProductsFromCompareListQuery($input: RemoveProductsFromCompareListInput) {
    removeProductsFromCompareList(input: $input) { item_count
uid }
  }
`;
    


export const removeProductsFromWishlistMutation = `
  mutation removeProductsFromWishlistQuery($wishlistId: ID!, $wishlistItemsIds: [ID!]!) {
    removeProductsFromWishlist(wishlistId: $wishlistId, wishlistItemsIds: $wishlistItemsIds) 
  }
`;
    


export const removeReturnTrackingMutation = `
  mutation removeReturnTrackingQuery($input: RemoveReturnTrackingInput!) {
    removeReturnTracking(input: $input) 
  }
`;
    


export const removeRewardPointsFromCartMutation = `
  mutation removeRewardPointsFromCartQuery($cartId: ID!) {
    removeRewardPointsFromCart(cartId: $cartId) 
  }
`;
    


export const removeStoreCreditFromCartMutation = `
  mutation removeStoreCreditFromCartQuery($input: RemoveStoreCreditFromCartInput!) {
    removeStoreCreditFromCart(input: $input) 
  }
`;
    


export const reorderItemsMutation = `
  mutation reorderItemsQuery($orderNumber: String!) {
    reorderItems(orderNumber: $orderNumber) 
  }
`;
    


export const requestPasswordResetEmailMutation = `
  mutation requestPasswordResetEmailQuery($email: String!) {
    requestPasswordResetEmail(email: $email) 
  }
`;
    


export const requestReturnMutation = `
  mutation requestReturnQuery($input: RequestReturnInput!) {
    requestReturn(input: $input) 
  }
`;
    


export const resetPasswordMutation = `
  mutation resetPasswordQuery($email: String!, $resetPasswordToken: String!, $newPassword: String!) {
    resetPassword(email: $email, resetPasswordToken: $resetPasswordToken, newPassword: $newPassword) 
  }
`;
    


export const revokeCustomerTokenMutation = `
  mutation revokeCustomerTokenQuery() {
    revokeCustomerToken() { result }
  }
`;
    


export const sendEmailToFriendMutation = `
  mutation sendEmailToFriendQuery($input: SendEmailToFriendInput) {
    sendEmailToFriend(input: $input) 
  }
`;
    


export const setBillingAddressOnCartMutation = `
  mutation setBillingAddressOnCartQuery($input: SetBillingAddressOnCartInput) {
    setBillingAddressOnCart(input: $input) 
  }
`;
    


export const setGiftOptionsOnCartMutation = `
  mutation setGiftOptionsOnCartQuery($input: SetGiftOptionsOnCartInput) {
    setGiftOptionsOnCart(input: $input) 
  }
`;
    


export const setGuestEmailOnCartMutation = `
  mutation setGuestEmailOnCartQuery($input: SetGuestEmailOnCartInput) {
    setGuestEmailOnCart(input: $input) 
  }
`;
    


export const setPaymentMethodAndPlaceOrderMutation = `
  mutation setPaymentMethodAndPlaceOrderQuery($input: SetPaymentMethodAndPlaceOrderInput) {
    setPaymentMethodAndPlaceOrder(input: $input) 
  }
`;
    


export const setPaymentMethodOnCartMutation = `
  mutation setPaymentMethodOnCartQuery($input: SetPaymentMethodOnCartInput) {
    setPaymentMethodOnCart(input: $input) 
  }
`;
    


export const setShippingAddressesOnCartMutation = `
  mutation setShippingAddressesOnCartQuery($input: SetShippingAddressesOnCartInput) {
    setShippingAddressesOnCart(input: $input) 
  }
`;
    


export const setShippingMethodsOnCartMutation = `
  mutation setShippingMethodsOnCartQuery($input: SetShippingMethodsOnCartInput) {
    setShippingMethodsOnCart(input: $input) 
  }
`;
    


export const shareGiftRegistryMutation = `
  mutation shareGiftRegistryQuery($giftRegistryUid: ID!, $sender: ShareGiftRegistrySenderInput!, $invitees: [ShareGiftRegistryInviteeInput!]!) {
    shareGiftRegistry(giftRegistryUid: $giftRegistryUid, sender: $sender, invitees: $invitees) { is_shared }
  }
`;
    


export const subscribeEmailToNewsletterMutation = `
  mutation subscribeEmailToNewsletterQuery($email: String!) {
    subscribeEmailToNewsletter(email: $email) 
  }
`;
    


export const updateCartItemsMutation = `
  mutation updateCartItemsQuery($input: UpdateCartItemsInput) {
    updateCartItems(input: $input) 
  }
`;
    


export const updateCustomerMutation = `
  mutation updateCustomerQuery($input: CustomerInput!) {
    updateCustomer(input: $input) 
  }
`;
    


export const updateCustomerAddressMutation = `
  mutation updateCustomerAddressQuery($id: Int!, $input: CustomerAddressInput) {
    updateCustomerAddress(id: $id, input: $input) { city
company
country_id
customer_id
default_billing
default_shipping
fax
firstname
id
lastname
middlename
postcode
prefix
region_id
street
suffix
telephone
vat_id }
  }
`;
    


export const updateCustomerEmailMutation = `
  mutation updateCustomerEmailQuery($email: String!, $password: String!) {
    updateCustomerEmail(email: $email, password: $password) 
  }
`;
    


export const updateCustomerV2Mutation = `
  mutation updateCustomerV2Query($input: CustomerUpdateInput!) {
    updateCustomerV2(input: $input) 
  }
`;
    


export const updateGiftRegistryMutation = `
  mutation updateGiftRegistryQuery($giftRegistryUid: ID!, $giftRegistry: UpdateGiftRegistryInput!) {
    updateGiftRegistry(giftRegistryUid: $giftRegistryUid, giftRegistry: $giftRegistry) 
  }
`;
    


export const updateGiftRegistryItemsMutation = `
  mutation updateGiftRegistryItemsQuery($giftRegistryUid: ID!, $items: [UpdateGiftRegistryItemInput!]!) {
    updateGiftRegistryItems(giftRegistryUid: $giftRegistryUid, items: $items) 
  }
`;
    


export const updateGiftRegistryRegistrantsMutation = `
  mutation updateGiftRegistryRegistrantsQuery($giftRegistryUid: ID!, $registrants: [UpdateGiftRegistryRegistrantInput!]!) {
    updateGiftRegistryRegistrants(giftRegistryUid: $giftRegistryUid, registrants: $registrants) 
  }
`;
    


export const updateProductsInWishlistMutation = `
  mutation updateProductsInWishlistQuery($wishlistId: ID!, $wishlistItems: [WishlistItemUpdateInput!]!) {
    updateProductsInWishlist(wishlistId: $wishlistId, wishlistItems: $wishlistItems) 
  }
`;
    


export const updateTokenBaseCardMutation = `
  mutation updateTokenBaseCardQuery($input: TokenBaseCardUpdateInput!) {
    updateTokenBaseCard(input: $input) { active
created_at
customer_email
customer_id
customer_ip
expires
hash
label
last_use
method
payment_id
profile_id
updated_at }
  }
`;
    


export const updateWishlistMutation = `
  mutation updateWishlistQuery($wishlistId: ID!, $name: String, $visibility: WishlistVisibilityEnum) {
    updateWishlist(wishlistId: $wishlistId, name: $name, visibility: $visibility) { name
uid }
  }
`;
    