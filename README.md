# Teemill custom product node
A Node-RED node that accepts an image and returns a URL for a buyable custom printed product using the [Teemill API](https://teemill.com/api).

### API Key
To customise the checkout to match your branding and to earn profit from product sales, [sign up for a free Teemill account](https://teemill.com/api) to get your public API key.

### Inputs

Name | Type | Description
--- | --- | ---
`msg.image_url` | string | Base64 encoded .png that will be printed on the product.
`msg.item_code` | string | Teemill item code identifier to specify which product to print on. Defaults to RNA1 (unisex organic t-shirt). See the full list of availble options [here](https://teemill.com/omnis/v3/product/options).
`msg.colours` | string | Comma seperated list of colours the product will be available in. See the full list of availble options [here](https://teemill.com/omnis/v3/product/options).
`msg.price` | string | Retail price of the product.
`msg.name` | string | Name of the custom product.
`msg.description` | string | Description to be displayed on the product page.
`msg.cross_sell` | boolean | Defines whether to offer the design on other product types on the product page. Defaults to 1.

### Docs
This node offers all options available via the Teemill Custom Product API - refer to the [docs](https://teemill.com/api-docs/create-custom-product/)</a> for all available options.
