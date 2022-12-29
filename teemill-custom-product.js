module.exports = function(RED) {
    "use strict";
    const got = require("got");

    function TeemillCustomProductNode(config) {
        RED.nodes.createNode(this, config);
        this.on('input', function(msg, send, done) {
            const url = 'https://teemill.com/omnis/v3/product/create';
            const default_description = "Check out this awesome custom product, printed sustainably on-demand on organic cotton using renewable energy. Created via Node-RED using the Teemill Custom Product API."

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${this.credentials.publicApiKey || '28raHEvBpyGKPA6noqXnl6nVerZjgE4H7MOy6gBY'}`,
                },
                json: {
                    image_url: msg.payload,
                    item_code: msg.item_code,
                    colours: msg.colours,
                    price: msg.price,
                    name: msg.name,
                    description: this.credentials.publicApiKey ? (msg.description || default_description) : default_description,
                    cross_sell: msg.cross_sell,
                },
            };

            this.status({fill:"grey", shape:"ring", text:"loading..."});

            got(url, options)
                .then(response => {
                    msg.payload = JSON.parse(response.body);
                    this.status({});
                    send(msg);
                    done();
                })
                .catch(error => {
                    this.error(error);
                    this.status({});
                });
        });
    }
    RED.nodes.registerType("custom product", TeemillCustomProductNode,{
        credentials: {
            publicApiKey: {type: "text"},
        }
    });
}