import Ember from 'ember';
// import { default as math, PI } from 'math';

export default Ember.Route.extend({
  afterModel() {
    this._super(...arguments);
    // console.log('should be 2', math.sqrt(4));
    // console.log('should be PI', PI);
  }
});
