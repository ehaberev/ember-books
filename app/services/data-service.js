import Service from '@ember/service';
import config from 'ember-books/config/environment';

export default class DataServiceService extends Service {
  async readAuthors() {
    const response = await fetch(`${config.backendURL}authors`);
    return response.json();
  }
}
