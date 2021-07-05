import Controller from '@ember/controller';
import { action } from '@ember/object';
import fetch from 'fetch';
import { tracked } from '@glimmer/tracking';
export default class UsersUserController extends Controller {
  @tracked archiveButtonClicked = false;

  @action
  async archiveUser(user_id) {
    const res = await fetch(`/api/users/${user_id}`, {
      method: 'PATCH',
    });
    const data = await res.json();
    data.success === true && (this.archiveButtonClicked = true);
  }
}
