
export const availableStoresQuery = `
  query availableStoresQuery($useCurrentGroup: Boolean) {
    availableStores(useCurrentGroup: $useCurrentGroup) 
  }
`;
    


export const cartQuery = `
  query cartQuery($cart_id: String!) {
    cart(cart_id: $cart_id) { email
gift_receipt_included
id
is_virtual
printed_card_included }
  }
`;
    


export const categoriesQuery = `
  query categoriesQuery($filters: CategoryFilterInput, $pageSize: Int, $currentPage: Int) {
    categories(filters: $filters, pageSize: $pageSize, currentPage: $currentPage) { total_count }
  }
`;
    


export const categoryQuery = `
  query categoryQuery($id: Int) {
    category(id: $id) { amp_homepage_image
automatic_sorting
available_sort_by
canonical_url
children_count
created_at
custom_layout_update_file
default_sort_by
description
display_mode
exclude_from_html_sitemap
exclude_from_sitemap
filter_price_range
id
image
include_in_menu
is_anchor
landing_page
level
meta_description
meta_keywords
meta_robots
meta_title
name
path
path_in_store
position
product_count
redirect_code
relative_url
staged
thumbnail
uid
updated_at
url_key
url_path
url_suffix }
  }
`;
    


export const categoryListQuery = `
  query categoryListQuery($filters: CategoryFilterInput) {
    categoryList(filters: $filters) 
  }
`;
    


export const checkoutAgreementsQuery = `
  query checkoutAgreementsQuery() {
    checkoutAgreements() 
  }
`;
    


export const cmsBlocksQuery = `
  query cmsBlocksQuery($identifiers: [String]) {
    cmsBlocks(identifiers: $identifiers) 
  }
`;
    


export const cmsPageQuery = `
  query cmsPageQuery($id: Int, $identifier: String) {
    cmsPage(id: $id, identifier: $identifier) { content
content_heading
identifier
meta_description
meta_keywords
meta_title
page_layout
redirect_code
relative_url
title
url_key }
  }
`;
    


export const compareListQuery = `
  query compareListQuery($uid: ID!) {
    compareList(uid: $uid) { item_count
uid }
  }
`;
    


export const countriesQuery = `
  query countriesQuery() {
    countries() 
  }
`;
    


export const countryQuery = `
  query countryQuery($id: String) {
    country(id: $id) { full_name_english
full_name_locale
id
three_letter_abbreviation
two_letter_abbreviation }
  }
`;
    


export const currencyQuery = `
  query currencyQuery() {
    currency() { available_currency_codes
base_currency_code
base_currency_symbol
default_display_currecy_code
default_display_currecy_symbol
default_display_currency_code
default_display_currency_symbol }
  }
`;
    


export const customAttributeMetadataQuery = `
  query customAttributeMetadataQuery($attributes: [AttributeInput!]!) {
    customAttributeMetadata(attributes: $attributes) 
  }
`;
    


export const customerQuery = `
  query customerQuery() {
    customer() { allow_remote_shopping_assistance
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
    


export const customerCartQuery = `
  query customerCartQuery() {
    customerCart() 
  }
`;
    


export const customerDownloadableProductsQuery = `
  query customerDownloadableProductsQuery() {
    customerDownloadableProducts() 
  }
`;
    


export const customerOrdersQuery = `
  query customerOrdersQuery() {
    customerOrders() { total_count }
  }
`;
    


export const customerPaymentTokensQuery = `
  query customerPaymentTokensQuery() {
    customerPaymentTokens() 
  }
`;
    


export const dynamicBlocksQuery = `
  query dynamicBlocksQuery($input: DynamicBlocksFilterInput, $pageSize: Int, $currentPage: Int) {
    dynamicBlocks(input: $input, pageSize: $pageSize, currentPage: $currentPage) 
  }
`;
    


export const getHostedProUrlQuery = `
  query getHostedProUrlQuery($input: HostedProUrlInput!) {
    getHostedProUrl(input: $input) { secure_form_url }
  }
`;
    


export const getPayflowLinkTokenQuery = `
  query getPayflowLinkTokenQuery($input: PayflowLinkTokenInput!) {
    getPayflowLinkToken(input: $input) { paypal_url
secure_token
secure_token_id }
  }
`;
    


export const giftCardAccountQuery = `
  query giftCardAccountQuery($input: GiftCardAccountInput!) {
    giftCardAccount(input: $input) { code
expiration_date }
  }
`;
    


export const giftRegistryQuery = `
  query giftRegistryQuery($giftRegistryUid: ID!) {
    giftRegistry(giftRegistryUid: $giftRegistryUid) { created_at
event_name
message
owner_name
uid }
  }
`;
    


export const giftRegistryEmailSearchQuery = `
  query giftRegistryEmailSearchQuery($email: String!) {
    giftRegistryEmailSearch(email: $email) 
  }
`;
    


export const giftRegistryIdSearchQuery = `
  query giftRegistryIdSearchQuery($giftRegistryUid: ID!) {
    giftRegistryIdSearch(giftRegistryUid: $giftRegistryUid) 
  }
`;
    


export const giftRegistryTypeSearchQuery = `
  query giftRegistryTypeSearchQuery($firstName: String!, $lastName: String!, $giftRegistryTypeUid: ID) {
    giftRegistryTypeSearch(firstName: $firstName, lastName: $lastName, giftRegistryTypeUid: $giftRegistryTypeUid) 
  }
`;
    


export const giftRegistryTypesQuery = `
  query giftRegistryTypesQuery() {
    giftRegistryTypes() 
  }
`;
    


export const isEmailAvailableQuery = `
  query isEmailAvailableQuery($email: String!) {
    isEmailAvailable(email: $email) { is_email_available }
  }
`;
    


export const menuItemsQuery = `
  query menuItemsQuery($menuKey: String, $parentId: Int) {
    menuItems(menuKey: $menuKey, parentId: $parentId) { menu_key
menu_title }
  }
`;
    


export const productReviewRatingsMetadataQuery = `
  query productReviewRatingsMetadataQuery() {
    productReviewRatingsMetadata() 
  }
`;
    


export const productsQuery = `
  query productsQuery($search: String, $filter: ProductAttributeFilterInput, $pageSize: Int, $currentPage: Int, $sort: ProductAttributeSortInput) {
    products(search: $search, filter: $filter, pageSize: $pageSize, currentPage: $currentPage, sort: $sort) { total_count }
  }
`;
    


export const routeQuery = `
  query routeQuery($url: String!) {
    route(url: $url) { redirect_code
relative_url }
  }
`;
    


export const storeConfigQuery = `
  query storeConfigQuery() {
    storeConfig() { absolute_footer
allow_gift_receipt
allow_gift_wrapping_on_order
allow_gift_wrapping_on_order_items
allow_guests_to_write_product_reviews
allow_items
allow_order
allow_printed_card
autocomplete_on_storefront
base_currency_code
base_link_url
base_media_url
base_static_url
base_url
braintree_cc_vault_active
cart_gift_wrapping
cart_printed_card
catalog_default_sort_by
category_url_suffix
check_money_order_enable_for_specific_countries
check_money_order_enabled
check_money_order_make_check_payable_to
check_money_order_max_order_total
check_money_order_min_order_total
check_money_order_new_order_status
check_money_order_payment_from_specific_countries
check_money_order_send_check_to
check_money_order_sort_order
check_money_order_title
cms_home_page
cms_no_cookies
cms_no_route
code
configurable_thumbnail_source
copyright
default_description
default_display_currency_code
default_keywords
default_title
demonotice
enable_multiple_wishlists
front
grid_per_page
grid_per_page_values
head_includes
head_shortcut_icon
header_logo_src
id
is_default_store
is_default_store_group
list_mode
list_per_page
list_per_page_values
locale
logo_alt
logo_height
logo_width
magento_reward_general_is_enabled
magento_reward_general_is_enabled_on_front
magento_reward_general_min_points_balance
magento_reward_general_publish_history
magento_reward_points_invitation_customer
magento_reward_points_invitation_customer_limit
magento_reward_points_invitation_order
magento_reward_points_invitation_order_limit
magento_reward_points_newsletter
magento_reward_points_order
magento_reward_points_register
magento_reward_points_review
magento_reward_points_review_limit
magento_wishlist_general_is_enabled
maximum_number_of_wishlists
minimum_password_length
no_route
payment_payflowpro_cc_vault_active
printed_card_price
product_reviews_enabled
product_url_suffix
required_character_classes_number
returns_enabled
root_category_id
root_category_uid
sales_gift_wrapping
sales_printed_card
secure_base_link_url
secure_base_media_url
secure_base_static_url
secure_base_url
show_cms_breadcrumbs
store_code
store_group_code
store_group_name
store_name
store_sort_order
timezone
title_prefix
title_separator
title_suffix
use_store_in_url
website_code
website_id
website_name
weight_unit
welcome
zero_subtotal_enable_for_specific_countries
zero_subtotal_enabled
zero_subtotal_new_order_status
zero_subtotal_payment_action
zero_subtotal_payment_from_specific_countries
zero_subtotal_sort_order
zero_subtotal_title }
  }
`;
    


export const tokenBaseCardsQuery = `
  query tokenBaseCardsQuery($hash: String) {
    tokenBaseCards(hash: $hash) 
  }
`;
    


export const tokenBaseCheckoutConfigQuery = `
  query tokenBaseCheckoutConfigQuery($method: String!) {
    tokenBaseCheckoutConfig(method: $method) { achImage
apiLoginId
canSaveCard
canStoreBin
clientKey
cvvImageUrl
defaultSaveCard
forceSaveCard
hasVerification
isCcDetectionEnabled
logoImage
method
requireCcv
sandbox
useVault }
  }
`;
    


export const urlResolverQuery = `
  query urlResolverQuery($url: String!) {
    urlResolver(url: $url) { canonical_url
entity_uid
id
redirectCode
relative_url }
  }
`;
    


export const wishlistQuery = `
  query wishlistQuery() {
    wishlist() { items_count
name
sharing_code
updated_at }
  }
`;
    