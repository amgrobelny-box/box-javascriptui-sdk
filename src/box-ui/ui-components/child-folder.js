const _ = require('lodash');
const $ = require('jquery');
const RootFolder = require('./root-folder');

class ChildFolder {
  constructor(client, data) {

    this.template = _.template(`
      <div id=<%= id %> class="folder">
        <i class="fa fa-plus-square"></i>
        <i class="fa fa-folder"></i>
        <%= name %>
      </div>
      `);
    this.data = data;
    this.client = client;
    this.compiled = (data) => { 
      data = data || this.data;
      return this.template(data); 
    };
    this.nonExpandableTemplate = _.template(`
      <div id=<%= id %> class="folder">
        <i class="fa fa-folder"></i>
        <%= name %>
      </div>
    `);
    this.nonExpandableCompiled = (data) => { 
      data = data || this.data;
      return this.nonExpandableTemplate(data); 
    };
  }

  registerHandlers() {
    $("body").on('click', `#${this.data.id}`, (event) => {
      this.client.folders.get(this.data.id)
        .then((response) => {
          if (response.data.item_collection.total_count > 0) {
            let root = new RootFolder(this.client, response.data);
            $(`#${this.data.id}`).replaceWith(root.compiled);
          } else {
            $("body").off("click", `#${this.data.id}`);
            $(`#${this.data.id}`).replaceWith(this.nonExpandableCompiled(this.data));
          }
        });
    });
  }
}
module.exports = ChildFolder;