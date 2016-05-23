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
      <div id='root'>
        <%= data.name %>
        <ul>
          <% _.forEach(data.item_collection.entries, function(childItem) { %>
            <% if(childItem.type === 'folder') { %>
              <% var childFolder = new ChildFolder(client, childItem); %>
              <%= childFolder.compiled %>
              <% childFolder.registerHandler(); %>
            <% } %>
            <% if(childItem.type === 'file') { %>
              <% var childFile = new ChildFile(client, childItem); %>
              <%= childFile.compiled %>
            <% } %>
          <% }); %>
        </ul>
      </div>
      `);
    this.compiled = this.template(this);
    
  }
};
module.exports = RootFolder;

