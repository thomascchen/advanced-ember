import Ember from 'ember';

export function <%= camelizedModuleName %>(params, hash) {
  let { w, h } = hash;
  let baseUrl = 'http://placekitten.com';
  return `${baseUrl}/${w}/${h}`;
}

export default Ember.Helper.helper(<%= camelizedModuleName %>);
