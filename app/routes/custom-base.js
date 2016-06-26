import Ember from 'ember';

export default Ember.Route.extend({
  afterModel() {
    this._super(...arguments);
    console.log('no model found');
  }
});
