import EmberRouter from '@ember/routing/router';
import config from 'ember-books/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('author', { path: '/authors' }, function () {
    this.route('detail', { path: '/:id' });
    this.route('edit', { path: '/:id/edit' });
    this.route('create');
  });
  this.route('books');
});
