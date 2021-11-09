import Service from '@ember/service';
import config from 'ember-books/config/environment';

export default class DataServiceService extends Service {
  async readAuthors(searchValue) {
    let url = `${config.backendURL}authors`;

    if (searchValue) {
      url += `?q=${searchValue}`;
    }

    const response = await fetch(url);
    return response.json();
  }

  async readAuthor(id) {
    const response = await fetch(`${config.backendURL}authors/${id}`);
    return response.json();
  }

  changeAuthor(author) {
    return fetch(`${config.backendURL}authors/${author.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(author),
    });
  }

  createAuthor(author) {
    return fetch(`${config.backendURL}authors`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(author),
    });
  }

  deleteAuthor(id) {
    return fetch(`${config.backendURL}authors/${id}`, {
      method: 'DELETE',
    });
  }
}
