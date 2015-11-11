import Ember from 'ember';

export default Ember.Component.extend({
	store: null,
	modelName: null,
	controllerContent: null,
	sorting: null,
	content: Ember.computed.sort('controllerContent', 'sorting'),

	actions:{
		check: function(){
			
		}
	},

	findContent: function(){		 
		if(this.get('modelName') && this.get('store')){
			this.set('controllerContent', this.get('store').findAll(this.get('modelName')));
		}
	}.on("init"),

	contentFilter: function(){
		var filtered = [];

		if(this.get('content')){
			filtered = this.get('content');
		}

		return filtered;
	}.property('content.[]')
});
