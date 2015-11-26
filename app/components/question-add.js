import Ember from 'ember';

export default Ember.Component.extend({
	content: function(){
		return this.store.findAll('category');
	}.property('store'),

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
