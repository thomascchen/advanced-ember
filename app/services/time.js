import Ember from 'ember';

const UPDATE_INTERVAL = 5000;

export default Ember.Service.extend({
  init() {
    this._super(...arguments);
    this.set('current', new Date()).valueOf();

    this._task = setInterval(() => {
      this.set('current', new Date().valueOf());
    }, UPDATE_INTERVAL);
  },

  willDestroy() {
    this._super(...arguments);
    clearInterval(this._task);
  }
});
