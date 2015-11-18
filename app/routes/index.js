import Ember from 'ember';

export default Ember.Route.extend({	
	model: function(){
		return Ember.RSVP.hash({
			categories: this.store.findAll('category'),
			questions: this.store.findAll('item')
		});
	},

	actions:{
		save: function(){
			var data = this.controller;

			var newQuestion = this.store.createRecord('item', {
				question: data.question,
				answer: data.answer
			});

			newQuestion.save();
		},

		addCategory: function(){
			var data = this.controller;

			var newCategory = this.store.createRecord('category', {
				title: data.category,
				items: [],
			});

			newCategory.save();			
		}
	}
});
