import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('loading');
  this.route('contact-us');
  this.route('blog');
});

export default Router;
