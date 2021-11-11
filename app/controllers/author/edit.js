import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AuthorEditController extends Controller {
  @service dataService;
  @service router;

  @action
  async editAuthor(author) {
    await this.dataService.changeAuthor(author);

    // this.transitionToRoute('author');
    this.router.transitionTo('author');
  }

  @action
  changeFirstName(firstName) {
    this.model.firstName = firstName;
  }

  initData() {
    this.firstName = this.model.firstName;
    this.lastName = this.model.lastName;
  }
}
