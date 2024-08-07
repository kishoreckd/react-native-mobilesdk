
const availableStoresQuery = `
  query availableStoresQuery($useCurrentGroup: useCurrentGroup) {
    availableStores($useCurrentGroup) 
  }
`;
    


const cartQuery = `
  query cartQuery($cart_id: cart_id) {
    cart($cart_id) { email
gift_receipt_included
id
is_virtual
printed_card_included }
  }
`;
    


const categoriesQuery = `
  query categoriesQuery($filters: filters, $pageSize: pageSize, $currentPage: currentPage) {
    categories($filters, $pageSize, $currentPage) { total_count }
  }
`;
    


const categoryQuery = `
  query categoryQuery($id: id) {
    category($id) { amp_homepage_image
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
    


const categoryListQuery = `
  query categoryListQuery($filters: filters) {
    categoryList($filters) 
  }
`;
    


const checkoutAgreementsQuery = `
  query checkoutAgreementsQuery() {
    checkoutAgreements() 
  }
`;
    


const cmsBlocksQuery = `
  query cmsBlocksQuery($identifiers: identifiers) {
    cmsBlocks($identifiers) 
  }
`;
    


const cmsPageQuery = `
  query cmsPageQuery($id: id, $identifier: identifier) {
    cmsPage($id, $identifier) { content
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
    


const compareListQuery = `
  query compareListQuery($uid: uid) {
    compareList($uid) { item_count
uid }
  }
`;
    


const countriesQuery = `
  query countriesQuery() {
    countries() 
  }
`;
    


const countryQuery = `
  query countryQuery($id: id) {
    country($id) { full_name_english
full_name_locale
id
three_letter_abbreviation
two_letter_abbreviation }
  }
`;
    


const currencyQuery = `
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
    


const customAttributeMetadataQuery = `
  query customAttributeMetadataQuery($attributes: attributes) {
    customAttributeMetadata($attributes) 
  }
`;
    


const customerQuery = `
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
    


const customerCartQuery = `
  query customerCartQuery() {
    customerCart() 
  }
`;
    


const customerDownloadableProductsQuery = `
  query customerDownloadableProductsQuery() {
    customerDownloadableProducts() 
  }
`;
    


const customerOrdersQuery = `
  query customerOrdersQuery() {
    customerOrders() { total_count }
  }
`;
    


const customerPaymentTokensQuery = `
  query customerPaymentTokensQuery() {
    customerPaymentTokens() 
  }
`;
    


const dynamicBlocksQuery = `
  query dynamicBlocksQuery($input: input, $pageSize: pageSize, $currentPage: currentPage) {
    dynamicBlocks($input, $pageSize, $currentPage) 
  }
`;
    


const getHostedProUrlQuery = `
  query getHostedProUrlQuery($input: input) {
    getHostedProUrl($input) { secure_form_url }
  }
`;
    


const getPayflowLinkTokenQuery = `
  query getPayflowLinkTokenQuery($input: input) {
    getPayflowLinkToken($input) { paypal_url
secure_token
secure_token_id }
  }
`;
    


const giftCardAccountQuery = `
  query giftCardAccountQuery($input: input) {
    giftCardAccount($input) { code
expiration_date }
  }
`;
    


const giftRegistryQuery = `
  query giftRegistryQuery($giftRegistryUid: giftRegistryUid) {
    giftRegistry($giftRegistryUid) { created_at
event_name
message
owner_name
uid }
  }
`;
    


const giftRegistryEmailSearchQuery = `
  query giftRegistryEmailSearchQuery($email: email) {
    giftRegistryEmailSearch($email) 
  }
`;
    


const giftRegistryIdSearchQuery = `
  query giftRegistryIdSearchQuery($giftRegistryUid: giftRegistryUid) {
    giftRegistryIdSearch($giftRegistryUid) 
  }
`;
    


const giftRegistryTypeSearchQuery = `
  query giftRegistryTypeSearchQuery($firstName: firstName, $lastName: lastName, $giftRegistryTypeUid: giftRegistryTypeUid) {
    giftRegistryTypeSearch($firstName, $lastName, $giftRegistryTypeUid) 
  }
`;
    


const giftRegistryTypesQuery = `
  query giftRegistryTypesQuery() {
    giftRegistryTypes() 
  }
`;
    


const isEmailAvailableQuery = `
  query isEmailAvailableQuery($email: email) {
    isEmailAvailable($email) { is_email_available }
  }
`;
    


const menuItemsQuery = `
  query menuItemsQuery($menuKey: menuKey, $parentId: parentId) {
    menuItems($menuKey, $parentId) { menu_key
menu_title }
  }
`;
    


const productReviewRatingsMetadataQuery = `
  query productReviewRatingsMetadataQuery() {
    productReviewRatingsMetadata() 
  }
`;
    


const productsQuery = `
  query productsQuery($search: search, $filter: filter, $pageSize: pageSize, $currentPage: currentPage, $sort: sort) {
    products($search, $filter, $pageSize, $currentPage, $sort) { total_count }
  }
`;
    


const routeQuery = `
  query routeQuery($url: url) {
    route($url) { redirect_code
relative_url }
  }
`;
    


const storeConfigQuery = `
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
    


const tokenBaseCardsQuery = `
  query tokenBaseCardsQuery($hash: hash) {
    tokenBaseCards($hash) 
  }
`;
    


const tokenBaseCheckoutConfigQuery = `
  query tokenBaseCheckoutConfigQuery($method: method) {
    tokenBaseCheckoutConfig($method) { achImage
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
    


const urlResolverQuery = `
  query urlResolverQuery($url: url) {
    urlResolver($url) { canonical_url
entity_uid
id
redirectCode
relative_url }
  }
`;
    


const wishlistQuery = `
  query wishlistQuery() {
    wishlist() { items_count
name
sharing_code
updated_at }
  }
`;
    