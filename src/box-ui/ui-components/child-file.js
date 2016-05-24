const _ = require('lodash');
const $ = require('jquery');

class ChildFile {
  constructor(client, data) {

    this.template = _.template(`
      <div id=<%= id %> class="file">
        <i class="fa fa-file" aria-hidden="true"></i>
        <%= name %>
      </div>
      `);
    this.compiled = this.template(data);
    this.client = client;
    this.data = data;
  }
}
module.exports = ChildFile;