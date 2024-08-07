
const addBundleProductsToCartMutation = `
  mutation addBundleProductsToCartQuery($input: input) {
    addBundleProductsToCart($input) 
  }
`;
    


const addConfigurableProductsToCartMutation = `
  mutation addConfigurableProductsToCartQuery($input: input) {
    addConfigurableProductsToCart($input) 
  }
`;
    


const addDownloadableProductsToCartMutation = `
  mutation addDownloadableProductsToCartQuery($input: input) {
    addDownloadableProductsToCart($input) 
  }
`;
    


const addGiftRegistryRegistrantsMutation = `
  mutation addGiftRegistryRegistrantsQuery($giftRegistryUid: giftRegistryUid, $registrants: registrants) {
    addGiftRegistryRegistrants($giftRegistryUid, $registrants) 
  }
`;
    


const addProductsToCartMutation = `
  mutation addProductsToCartQuery($cartId: cartId, $cartItems: cartItems) {
    addProductsToCart($cartId, $cartItems) 
  }
`;
    


const addProductsToCompareListMutation = `
  mutation addProductsToCompareListQuery($input: input) {
    addProductsToCompareList($input) { item_count
uid }
  }
`;
    


const addProductsToWishlistMutation = `
  mutation addProductsToWishlistQuery($wishlistId: wishlistId, $wishlistItems: wishlistItems) {
    addProductsToWishlist($wishlistId, $wishlistItems) 
  }
`;
    


const addReturnCommentMutation = `
  mutation addReturnCommentQuery($input: input) {
    addReturnComment($input) 
  }
`;
    


const addReturnTrackingMutation = `
  mutation addReturnTrackingQuery($input: input) {
    addReturnTracking($input) 
  }
`;
    


const addSimpleProductsToCartMutation = `
  mutation addSimpleProductsToCartQuery($input: input) {
    addSimpleProductsToCart($input) 
  }
`;
    


const addVirtualProductsToCartMutation = `
  mutation addVirtualProductsToCartQuery($input: input) {
    addVirtualProductsToCart($input) 
  }
`;
    


const addWishlistItemsToCartMutation = `
  mutation addWishlistItemsToCartQuery($wishlistId: wishlistId, $wishlistItemIds: wishlistItemIds) {
    addWishlistItemsToCart($wishlistId, $wishlistItemIds) { status }
  }
`;
    


const applyCouponToCartMutation = `
  mutation applyCouponToCartQuery($input: input) {
    applyCouponToCart($input) 
  }
`;
    


const applyGiftCardToCartMutation = `
  mutation applyGiftCardToCartQuery($input: input) {
    applyGiftCardToCart($input) 
  }
`;
    


const applyRewardPointsToCartMutation = `
  mutation applyRewardPointsToCartQuery($cartId: cartId) {
    applyRewardPointsToCart($cartId) 
  }
`;
    


const applyStoreCreditToCartMutation = `
  mutation applyStoreCreditToCartQuery($input: input) {
    applyStoreCreditToCart($input) 
  }
`;
    


const assignCompareListToCustomerMutation = `
  mutation assignCompareListToCustomerQuery($uid: uid) {
    assignCompareListToCustomer($uid) { result }
  }
`;
    


const assignCustomerToGuestCartMutation = `
  mutation assignCustomerToGuestCartQuery($cart_id: cart_id) {
    assignCustomerToGuestCart($cart_id) 
  }
`;
    


const changeCustomerPasswordMutation = `
  mutation changeCustomerPasswordQuery($currentPassword: currentPassword, $newPassword: newPassword) {
    changeCustomerPassword($currentPassword, $newPassword) { allow_remote_shopping_assistance
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
    


const copyProductsBetweenWishlistsMutation = `
  mutation copyProductsBetweenWishlistsQuery($sourceWishlistUid: sourceWishlistUid, $destinationWishlistUid: destinationWishlistUid, $wishlistItems: wishlistItems) {
    copyProductsBetweenWishlists($sourceWishlistUid, $destinationWishlistUid, $wishlistItems) 
  }
`;
    


const createBraintreeClientTokenMutation = `
  mutation createBraintreeClientTokenQuery() {
    createBraintreeClientToken() 
  }
`;
    


const createCompareListMutation = `
  mutation createCompareListQuery($input: input) {
    createCompareList($input) { item_count
uid }
  }
`;
    


const createCustomerMutation = `
  mutation createCustomerQuery($input: input) {
    createCustomer($input) 
  }
`;
    


const createCustomerAddressMutation = `
  mutation createCustomerAddressQuery($input: input) {
    createCustomerAddress($input) { city
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
    


const createCustomerV2Mutation = `
  mutation createCustomerV2Query($input: input) {
    createCustomerV2($input) 
  }
`;
    


const createEmptyCartMutation = `
  mutation createEmptyCartQuery($input: input) {
    createEmptyCart($input) 
  }
`;
    


const createGiftRegistryMutation = `
  mutation createGiftRegistryQuery($giftRegistry: giftRegistry) {
    createGiftRegistry($giftRegistry) 
  }
`;
    


const createPayflowProTokenMutation = `
  mutation createPayflowProTokenQuery($input: input) {
    createPayflowProToken($input) { response_message
result
result_code
secure_token
secure_token_id }
  }
`;
    


const createPaypalExpressTokenMutation = `
  mutation createPaypalExpressTokenQuery($input: input) {
    createPaypalExpressToken($input) { token }
  }
`;
    


const createProductReviewMutation = `
  mutation createProductReviewQuery($input: input) {
    createProductReview($input) 
  }
`;
    


const createTokenBaseCardMutation = `
  mutation createTokenBaseCardQuery($input: input) {
    createTokenBaseCard($input) { active
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
    


const createWishlistMutation = `
  mutation createWishlistQuery($input: input) {
    createWishlist($input) 
  }
`;
    


const deleteCompareListMutation = `
  mutation deleteCompareListQuery($uid: uid) {
    deleteCompareList($uid) { result }
  }
`;
    


const deleteCustomerAddressMutation = `
  mutation deleteCustomerAddressQuery($id: id) {
    deleteCustomerAddress($id) 
  }
`;
    


const deletePaymentTokenMutation = `
  mutation deletePaymentTokenQuery($public_hash: public_hash) {
    deletePaymentToken($public_hash) { result }
  }
`;
    


const deleteTokenBaseCardMutation = `
  mutation deleteTokenBaseCardQuery($hash: hash) {
    deleteTokenBaseCard($hash) 
  }
`;
    


const deleteWishlistMutation = `
  mutation deleteWishlistQuery($wishlistId: wishlistId) {
    deleteWishlist($wishlistId) { status }
  }
`;
    


const generateCustomerTokenMutation = `
  mutation generateCustomerTokenQuery($email: email, $password: password) {
    generateCustomerToken($email, $password) { token }
  }
`;
    


const generateCustomerTokenAsAdminMutation = `
  mutation generateCustomerTokenAsAdminQuery($input: input) {
    generateCustomerTokenAsAdmin($input) { customer_token }
  }
`;
    


const handlePayflowProResponseMutation = `
  mutation handlePayflowProResponseQuery($input: input) {
    handlePayflowProResponse($input) 
  }
`;
    


const mergeCartsMutation = `
  mutation mergeCartsQuery($source_cart_id: source_cart_id, $destination_cart_id: destination_cart_id) {
    mergeCarts($source_cart_id, $destination_cart_id) 
  }
`;
    


const moveCartItemsToGiftRegistryMutation = `
  mutation moveCartItemsToGiftRegistryQuery($cartUid: cartUid, $giftRegistryUid: giftRegistryUid) {
    moveCartItemsToGiftRegistry($cartUid, $giftRegistryUid) { status }
  }
`;
    


const moveProductsBetweenWishlistsMutation = `
  mutation moveProductsBetweenWishlistsQuery($sourceWishlistUid: sourceWishlistUid, $destinationWishlistUid: destinationWishlistUid, $wishlistItems: wishlistItems) {
    moveProductsBetweenWishlists($sourceWishlistUid, $destinationWishlistUid, $wishlistItems) 
  }
`;
    


const placeOrderMutation = `
  mutation placeOrderQuery($input: input) {
    placeOrder($input) 
  }
`;
    


const redeemGiftCardBalanceAsStoreCreditMutation = `
  mutation redeemGiftCardBalanceAsStoreCreditQuery($input: input) {
    redeemGiftCardBalanceAsStoreCredit($input) { code
expiration_date }
  }
`;
    


const removeCouponFromCartMutation = `
  mutation removeCouponFromCartQuery($input: input) {
    removeCouponFromCart($input) 
  }
`;
    


const removeGiftCardFromCartMutation = `
  mutation removeGiftCardFromCartQuery($input: input) {
    removeGiftCardFromCart($input) 
  }
`;
    


const removeGiftRegistryMutation = `
  mutation removeGiftRegistryQuery($giftRegistryUid: giftRegistryUid) {
    removeGiftRegistry($giftRegistryUid) { success }
  }
`;
    


const removeGiftRegistryItemsMutation = `
  mutation removeGiftRegistryItemsQuery($giftRegistryUid: giftRegistryUid, $itemsUid: itemsUid) {
    removeGiftRegistryItems($giftRegistryUid, $itemsUid) 
  }
`;
    


const removeGiftRegistryRegistrantsMutation = `
  mutation removeGiftRegistryRegistrantsQuery($giftRegistryUid: giftRegistryUid, $registrantsUid: registrantsUid) {
    removeGiftRegistryRegistrants($giftRegistryUid, $registrantsUid) 
  }
`;
    


const removeItemFromCartMutation = `
  mutation removeItemFromCartQuery($input: input) {
    removeItemFromCart($input) 
  }
`;
    


const removeProductsFromCompareListMutation = `
  mutation removeProductsFromCompareListQuery($input: input) {
    removeProductsFromCompareList($input) { item_count
uid }
  }
`;
    


const removeProductsFromWishlistMutation = `
  mutation removeProductsFromWishlistQuery($wishlistId: wishlistId, $wishlistItemsIds: wishlistItemsIds) {
    removeProductsFromWishlist($wishlistId, $wishlistItemsIds) 
  }
`;
    


const removeReturnTrackingMutation = `
  mutation removeReturnTrackingQuery($input: input) {
    removeReturnTracking($input) 
  }
`;
    


const removeRewardPointsFromCartMutation = `
  mutation removeRewardPointsFromCartQuery($cartId: cartId) {
    removeRewardPointsFromCart($cartId) 
  }
`;
    


const removeStoreCreditFromCartMutation = `
  mutation removeStoreCreditFromCartQuery($input: input) {
    removeStoreCreditFromCart($input) 
  }
`;
    


const reorderItemsMutation = `
  mutation reorderItemsQuery($orderNumber: orderNumber) {
    reorderItems($orderNumber) 
  }
`;
    


const requestPasswordResetEmailMutation = `
  mutation requestPasswordResetEmailQuery($email: email) {
    requestPasswordResetEmail($email) 
  }
`;
    


const requestReturnMutation = `
  mutation requestReturnQuery($input: input) {
    requestReturn($input) 
  }
`;
    


const resetPasswordMutation = `
  mutation resetPasswordQuery($email: email, $resetPasswordToken: resetPasswordToken, $newPassword: newPassword) {
    resetPassword($email, $resetPasswordToken, $newPassword) 
  }
`;
    


const revokeCustomerTokenMutation = `
  mutation revokeCustomerTokenQuery() {
    revokeCustomerToken() { result }
  }
`;
    


const sendEmailToFriendMutation = `
  mutation sendEmailToFriendQuery($input: input) {
    sendEmailToFriend($input) 
  }
`;
    


const setBillingAddressOnCartMutation = `
  mutation setBillingAddressOnCartQuery($input: input) {
    setBillingAddressOnCart($input) 
  }
`;
    


const setGiftOptionsOnCartMutation = `
  mutation setGiftOptionsOnCartQuery($input: input) {
    setGiftOptionsOnCart($input) 
  }
`;
    


const setGuestEmailOnCartMutation = `
  mutation setGuestEmailOnCartQuery($input: input) {
    setGuestEmailOnCart($input) 
  }
`;
    


const setPaymentMethodAndPlaceOrderMutation = `
  mutation setPaymentMethodAndPlaceOrderQuery($input: input) {
    setPaymentMethodAndPlaceOrder($input) 
  }
`;
    


const setPaymentMethodOnCartMutation = `
  mutation setPaymentMethodOnCartQuery($input: input) {
    setPaymentMethodOnCart($input) 
  }
`;
    


const setShippingAddressesOnCartMutation = `
  mutation setShippingAddressesOnCartQuery($input: input) {
    setShippingAddressesOnCart($input) 
  }
`;
    


const setShippingMethodsOnCartMutation = `
  mutation setShippingMethodsOnCartQuery($input: input) {
    setShippingMethodsOnCart($input) 
  }
`;
    


const shareGiftRegistryMutation = `
  mutation shareGiftRegistryQuery($giftRegistryUid: giftRegistryUid, $sender: sender, $invitees: invitees) {
    shareGiftRegistry($giftRegistryUid, $sender, $invitees) { is_shared }
  }
`;
    


const subscribeEmailToNewsletterMutation = `
  mutation subscribeEmailToNewsletterQuery($email: email) {
    subscribeEmailToNewsletter($email) 
  }
`;
    


const updateCartItemsMutation = `
  mutation updateCartItemsQuery($input: input) {
    updateCartItems($input) 
  }
`;
    


const updateCustomerMutation = `
  mutation updateCustomerQuery($input: input) {
    updateCustomer($input) 
  }
`;
    


const updateCustomerAddressMutation = `
  mutation updateCustomerAddressQuery($id: id, $input: input) {
    updateCustomerAddress($id, $input) { city
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
    


const updateCustomerEmailMutation = `
  mutation updateCustomerEmailQuery($email: email, $password: password) {
    updateCustomerEmail($email, $password) 
  }
`;
    


const updateCustomerV2Mutation = `
  mutation updateCustomerV2Query($input: input) {
    updateCustomerV2($input) 
  }
`;
    


const updateGiftRegistryMutation = `
  mutation updateGiftRegistryQuery($giftRegistryUid: giftRegistryUid, $giftRegistry: giftRegistry) {
    updateGiftRegistry($giftRegistryUid, $giftRegistry) 
  }
`;
    


const updateGiftRegistryItemsMutation = `
  mutation updateGiftRegistryItemsQuery($giftRegistryUid: giftRegistryUid, $items: items) {
    updateGiftRegistryItems($giftRegistryUid, $items) 
  }
`;
    


const updateGiftRegistryRegistrantsMutation = `
  mutation updateGiftRegistryRegistrantsQuery($giftRegistryUid: giftRegistryUid, $registrants: registrants) {
    updateGiftRegistryRegistrants($giftRegistryUid, $registrants) 
  }
`;
    


const updateProductsInWishlistMutation = `
  mutation updateProductsInWishlistQuery($wishlistId: wishlistId, $wishlistItems: wishlistItems) {
    updateProductsInWishlist($wishlistId, $wishlistItems) 
  }
`;
    


const updateTokenBaseCardMutation = `
  mutation updateTokenBaseCardQuery($input: input) {
    updateTokenBaseCard($input) { active
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
    


const updateWishlistMutation = `
  mutation updateWishlistQuery($wishlistId: wishlistId, $name: name, $visibility: visibility) {
    updateWishlist($wishlistId, $name, $visibility) { name
uid }
  }
`;
    