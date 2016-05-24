const _ = require('lodash');
const $ = require('jquery');

class AllFilesView {
  constructor(client, data) {
    this.RootFolder = require('./root-folder');
    this.client = client;
    this.data = data;
    this.template = _.template(`
      <div class="all-files">
        <ul>
          <% var rootFolder = new RootFolder(client, data); %>
          <%= rootFolder.compiled %>
        </ul>
      </div>
      `);
    this.compiled = this.template(this);
  }
};
module.exports = AllFilesView;

