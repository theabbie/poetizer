var axios = require("axios");

module.exports = class Poetizer {
  constructor() {
    this.root = 'https://api.poetizer.com';
  }

  async login(email,password) {
    this.email = email;
    this.password = password;
    var token = await axios({
      url: this.root + '/devices/email',
      method: 'POST',
      data: {
        "email": this.email,
        "password": this.password,
        "platform": "android",
        "device_name": "Xiaomi Redmi Note 7 Pro"
      }
    });
    this.uid = token.data["user_id"];
    this.token = token.data["device_token"];
    return this.token;
  }

  addToken(token) {
    this.token = token;
  }

  async post(title,poem,tags) {
    var result = await axios({
      url: this.root + '/poems',
      method: 'POST',
      data: {
        "title": title,
        "text": poem,
        "text_align": "left",
        "is_published": true,
        "tags": tags,
        "language_id": 2,
        "comments_allowed": true
      },
      headers: {
        'authorization': 'Device-token ' + this.token
      }
    });
    return result.data;
  }

  async getProfile() {
    var profile = await axios({
      url: this.root + '/users/me',
      headers: {
        'authorization': 'Device-token ' + this.token
      }
    });
    return profile.data;
  }
}
