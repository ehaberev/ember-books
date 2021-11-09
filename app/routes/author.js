import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class AuthorRoute extends Route {
  @service dataService;
  queryParams = {
    search: {
      refreshModel: true,
    },
  };

  async model(/* { search } */) {
    return {
      isLoading: true,
    };

    //return this.dataService.readAuthors(search);
  }

  @action
  loading() {
    return false;
  }

  setupController(controller, model) {
    super.setupController(...arguments);

    controller.loadData();
  }
}
