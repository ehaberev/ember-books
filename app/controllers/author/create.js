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
  async saveAuthor(e) {
    e.preventDefault();

    await this.dataService.createAuthor(this.model);

    this.router.transitionTo('author');
  }

  // reset() {
  //   this.firstName = '';
  //   this.lastName = '';
  // }
}
