import Ember from 'ember';

export default Ember.Component.extend({
	store: null,
	modelName: null,
	controllerContent: null,
	sorting: null,
	content: Ember.computed.sort('controllerContent', 'sorting'),
	showResults: false,

	actions:{
		check: function(){
			if(this.get('content')){	
				
				//this.checkAnswers();

				this.set('showResults', true);
				
				this.get('content').forEach(function(item){
					item.set('showResult', true);
				});
			}
		},
	},

	checkAnswers: function(){
		var questions;
		//console.log(this.get('content').length);
		this.get('content').forEach(function(item){
			console.log(item.get('myAnswer'));
		});
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

		//console.log(filtered);

		return filtered;
	}.property('content.[]', 'content.[].isCorrect'),

	questionsNum: function(){
		//var test = this.get('content').filterBy('isCorrect');
		return this.get('content').length;

	}.property('content', 'content.[].isCorrect'),

});
