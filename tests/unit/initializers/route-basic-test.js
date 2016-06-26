import Ember from 'ember';
import RouteBasicInitializer from 'advanced-ember/initializers/route-basic';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | route basic', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  RouteBasicInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
