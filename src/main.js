'use strict';
require("font-awesome-webpack");
let BoxClientFactory = require('./box-client/box-client');
let BoxClient = new BoxClientFactory({access_token: ""});
let BoxView = require('./box-ui/box-ui');

console.log(BoxClient);

let view = new BoxView(BoxClient);
console.log(view.displayRootFolder(document.body));