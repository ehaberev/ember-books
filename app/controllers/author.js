import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class AuthorController extends Controller {
  @service dataService;
  queryParams = ['search'];
  @tracked isLoading;

  search = '';

  async loadData() {
    this.isLoading = true;
    // const data = await this.dataService.readAuthors(this.search);
    const data = this.store.findAll('author');
    this.model = data;
    this.isLoading = false;
  }
}
