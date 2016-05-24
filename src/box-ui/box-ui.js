const $ = require('jquery');
const AllFilesView = require('./ui-components/all-files-view');
class BoxUI {
  constructor(client) {
    this.client = client;
  }

  displayRootFolder(parentElement) {
    this.client.folders.get('0', {fields: 'name,id,item_collection'})
      .then((response) => {
        let root = new AllFilesView(this.client, response.data);
        $(parentElement).append(root.compiled);
      });
  }
};

module.exports = BoxUI;
