'use strict';
const BASE_PATH = '/folders';

class Folders {
  constructor(client) {
    this.client = client;
  }

  get(folderId) {
    let apiPath = `${BASE_PATH}/${folderId}`;
    return this.client.get(apiPath);
  }
}

module.exports = Folders;