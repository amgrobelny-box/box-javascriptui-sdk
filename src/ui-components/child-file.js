const _ = require('lodash');
const $ = require('jquery');

class ChildFile {
  constructor(client, data) {

    this.template = _.template(`
      <li id=<%= id %>>
        <%= name %>
      </li>
      `);
    this.compiled = this.template(data);
    this.client = client;
    this.data = data;
  }
}
module.exports = ChildFile;