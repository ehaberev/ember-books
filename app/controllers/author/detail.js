import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AuthorDetailController extends Controller {
  @service dataService;
  @service router;

  @action
  async deleteAuthor() {
    await this.dataService.deleteAuthor(this.model.id);
    this.router.transitionTo('author');
  }
}
