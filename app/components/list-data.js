import Ember from 'ember';

export default Ember.Component.extend({
	store: null,
	modelName: null,
	controllerContent: null,
	sorting: null,
	content: Ember.computed.sort('controllerContent', 'sorting'),
	showResults: false,

	actions:{
		checkQuestions: function(){
			if(this.get('content')){			
				this.set('showResults', true);
				
				this.get('content').forEach(function(item){
					item.set('showResult', true);
				});
			}
		},

		showAnswers: function(){
			if(this.get('content')){			
				this.get('content').forEach(function(item){
					item.set('showAnswers', true);
				});
			}
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

		//console.log(filtered);

		return filtered;
	}.property('content.[]', 'content.[].isCorrect'),

	questionsNum: function(){
		//var test = this.get('content').filterBy('isCorrect');
		return this.get('content').length;

	}.property('content', 'content.[].isCorrect'),

});
