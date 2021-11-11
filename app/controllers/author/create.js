import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class AuthorCreateController extends Controller {
  @service dataService;
  @service router;

  // @tracked firstName = '';
  // @tracked lastName = '';

  @action
  async createAuthor(author) {
    await this.dataService.createAuthor(author);

    this.router.transitionTo('author');
  }

  // reset() {
  //   this.firstName = '';
  //   this.lastName = '';
  // }
}
