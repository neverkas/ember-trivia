import Ember from 'ember';

export default Ember.Route.extend({	
	model: function(){
		var store;

		store = Ember.RSVP.hash({
			categories: this.store.findAll('category'),
			questions: this.store.findAll('question')
		}).then(function(test){
			console.group("Route Store");
			console.log(test);
			console.groupEnd();
		});

		return store;
	},
});
