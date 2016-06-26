import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return new Ember.RSVP.Promise(function(resolve) {
      Ember.run.later(function() {
        resolve();
        // resolve({ msg: 'WAIT '});
      }, 500);
    });
  }

  // setupController(controller, model) {
  //   console.log(model.msg); // "Hold Your Horses"
  // }
});
