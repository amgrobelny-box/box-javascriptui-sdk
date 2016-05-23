const $ = require('jquery');
const RootFolder = require('./ui-components/root-folder-view');
class BoxUI {
  constructor(client) {
    this.client = client;
  }

  displayRootFolder(parentElement) {
    this.client.folders.get('0')
      .then((response) => {
        let root = new RootFolder(this.client, response.data);
        console.log(response.data);
        $(parentElement).append(root.compiled);
      });
  }
};

module.exports = BoxUI;
