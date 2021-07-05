import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | users/user', function(hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('users page exists', async function(assert) {
    await visit('/users');
    assert.equal(currentURL(), '/users');
  });

  test('should get one user', async function(assert) {
    let controller = this.owner.lookup('controller:users/user');
    assert.ok(controller);

    await visit('/users/2');
    assert.equal(currentURL(), '/users/2');

    assert.equal(
      controller.archiveButtonClicked,
      false,
      'archiveButton initialized'
    );

    assert.dom('button.badge').hasText('Click to archive');
    await click('button[type="button"]');
    assert.dom('div.badge')
  });
});
