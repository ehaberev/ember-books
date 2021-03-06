import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AuthorDetailRoute extends Route {
  @service dataService;

  async model({ id }) {
    return this.dataService.readAuthor(id);
  }
}
