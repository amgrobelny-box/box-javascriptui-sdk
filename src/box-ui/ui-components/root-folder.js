
const _ = require('lodash');
const $ = require('jquery');

class RootFolder {
  constructor(client, data) {
    this.ChildFolder = require('./child-folder');
    this.ChildFile = require('./child-file');
    this.client = client;
    this.data = data;
    this.childFolderEntries = data.item_collection.entries;
    this.template = _.template(`
      <div>
        <i class="fa fa-plus-square"></i>
        <i class="fa fa-folder"></i>
        <%= data.name %>
      </div>
      <ul>
        <% _.forEach(childFolderEntries, function(childItem) { %>
          <% if(childItem.type === 'folder') { %>
            <% var childFolder = new ChildFolder(client, childItem); %>
            <%= childFolder.compiled() %>
            <% childFolder.registerHandlers(); %>
          <% } %>
          <% if(childItem.type === 'file') { %>
            <% var childFile = new ChildFile(client, childItem); %>
            <%= childFile.compiled %>
          <% } %>
        <% }); %>
      </ul>
      `);
    this.compiled = this.template(this);
  }
};
module.exports = RootFolder;





