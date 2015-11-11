//import DS from 'ember-data';
import Firebase from 'firebase';
import FirebaseAdapter from 'emberfire/adapters/firebase';

export default FirebaseAdapter.extend({
//  firebase: new Firebase(config.firebase)
  firebase: new Firebase('https://ember-trivia.firebaseio.com/')
});
/*
export default DS.RESTAdapter.extend({
	host: 'http://localhost:1337',
	coalesceFindRequests: true,   // these blueprints support coalescing (reduces the amount of requests)
});
*/
