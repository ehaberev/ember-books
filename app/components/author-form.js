import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class AuthorFormComponent extends Component {
  @action
  saveForm(e) {
    e.preventDefault();

    this.args.saveAuthor(this.args.author);
  }
}
