import Ember from 'ember';

export default Ember.Component.extend({
	actions: {	
		save: function(){
			var data = this.controller;

			var newCategory = this.store.createRecord('category', {
				title: data.category,
				items: [],
			});

			newCategory.save();	
		}
	}
});
