import Ember from 'ember';

export default Ember.Component.extend({
	showResults: false,

	content: function(){
		return this.store.findAll('question');
	}.property('store'),

	actions:{
		check: function(){
			if(this.get('content')){	
				this.set('showResults', true);
				
				this.get('content').forEach(function(item){
					item.set('showResult', true);
				});
			}
		},
	},

	checkAnswers: function(){
		//var questions;
		this.get('content').forEach(function(item){
			//console.log(item.get('myAnswer'));
		});
	},

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
