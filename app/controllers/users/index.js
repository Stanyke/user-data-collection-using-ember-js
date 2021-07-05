import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class UsersUserController extends Controller {
  @tracked filterForAvailable = true;
  @tracked filterForArchived = false;
  @tracked filterForAll = false;

  changeFilterStatus = (available, archived, all) => {
    this.filterForAvailable = available;
    this.filterForArchived = archived;
    this.filterForAll = all;
  };

  @action
  async applyFilter(status) {
    if (status == '1') {
      this.changeFilterStatus(true, false, false);
    } else if (status == '2') {
      this.changeFilterStatus(false, true, false);
    } else if (status == '3') {
      this.changeFilterStatus(false, false, true);
    }
  }
}
