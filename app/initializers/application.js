export function initialize(application) {
  // application.inject('route', 'foo', 'service:foo');
  //application.inject('component', 'store', 'service:store');
  //after: "store",
  //application.inject('route', 'store', 'service:store');
  application.inject('component', 'store', 'service:store');
}

export default {
  name: 'application',
  initialize: initialize
};
