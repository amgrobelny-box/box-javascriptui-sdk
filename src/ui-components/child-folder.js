const _ = require('lodash');
const $ = require('jquery');
const RootFolder = require('./root-folder-view');

class ChildFolder {
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

  registerHandler() {
    $("body").on('click', `#${this.data.id}`, (event) => {
      this.client.folders.get(this.data.id)
        .then((response) => {
          if (response.data.item_collection.total_count > 0) {
            let root = new RootFolder(this.client, response.data);
            $(`#${this.data.id}`).replaceWith(root.compiled);
            _.forEach(response.data.item_collection.entries, (entry) => {
              let child = new ChildFolder(this.client, entry);
              $(`#${this.data.id}`).append(child.compiled);
            })
          }

        });
    });
  }
}
module.exports = ChildFolder;