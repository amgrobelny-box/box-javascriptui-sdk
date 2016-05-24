const axios = require('axios');
const Folders = require('./managers/folders');

const HEADER_AUTHORIZATION_PREFIX = 'Bearer ';

class BoxClient {
  constructor(tokenObject) {
    this.accessToken = tokenObject.access_token;
    this.expiresAt = tokenObject.expires_at || null;
    this.baseApiUrl = "https://api.box.com/2.0"
    this.folders = new Folders(this);
    this.request = axios.create({
      baseURL: this.baseApiUrl,
      headers: { Authorization: `${HEADER_AUTHORIZATION_PREFIX}${this.accessToken}` }
    });
  }

  get(path, params) {
    params = params || {};
    params.method = 'GET';
    params.url = `${this.baseApiUrl}${path}`;
    return (this.makeRequest(params));
  }

  makeRequest(params) {
    if(this.expiresAt && Date.now() >= this.expiresAt) {
      refreshToken();
    }
    return this.request.request(params);
  }
  
  refreshToken() {
    
  }
  
}

module.exports = BoxClient;