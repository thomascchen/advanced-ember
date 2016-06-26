import Ember from 'ember';
import MathInitializer from 'advanced-ember/initializers/math';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | math', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  MathInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
