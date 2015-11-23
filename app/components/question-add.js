import Ember from 'ember';

export default Ember.Component.extend({
	//store: Ember.inject.service('store'),
	store: null,

	didInsertElement: function(){
		//console.log(this);
		//console.log(this.controller);
	},

	actions: {	
		save: function(){
			var data = this.controller;

			var newQuestion = this.store.createRecord('question', {
				question: data.question,
				answer: data.answer
			});

			newQuestion.save();
		},
	}
});
