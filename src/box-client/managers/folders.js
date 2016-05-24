'use strict';
const BASE_PATH = '/folders';

class Folders {
  constructor(client) {
    this.client = client;
  }

  get(folderId, qsParams) {
    let params = {
      params: qsParams
    };
    let apiPath = `${BASE_PATH}/${folderId}`;
    return this.client.get(apiPath, params);
  }
  
  getItems(folderId, qsParams) {
    let apiPath = `${BASE_PATH}/${folderID}/items`;
  }
}

module.exports = Folders;