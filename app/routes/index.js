import Ember from 'ember';

export default Ember.Route.extend({
	actions:{
		save: function(){
			var data = this.controller;

			var newQuestion = this.store.createRecord('item', {
				question: data.question,
				answer: data.answer
			});

			newQuestion.save();
		}
	}
});
