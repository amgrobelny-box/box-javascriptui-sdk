'use strict';
let BoxClientFactory = require('./box-client');
let BoxClient = new BoxClientFactory("");
let BoxView = require('./box-ui');

console.log(BoxClient);

let view = new BoxView(BoxClient);
console.log(view.displayRootFolder($('body')));