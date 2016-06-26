import BasicRoute from '../routes/custom-base';

export function initialize(application) {
  // application.inject('route', 'foo', 'service:foo');
  application.register('route:basic', BasicRoute);

  // define('math', ['ember-debug'], function(emberDebug) {
}

export default {
  name: 'route-basic',
  initialize
};
