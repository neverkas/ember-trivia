import Ember from 'ember';

export default Ember.Component.extend({
	myAnswer: '',
	showResult: false,
	showAnswers: false,

	didInsertElement: function(){
		//console.log(this);
	},

	actions:{
		removeItem: function(item){
			//console.log(item);
			item.remove();
		}
	},

	isCorrect: function(){
		var isCorrect;

		if(this.get('myAnswer') && this.get('myAnswer').length > 0){
			isCorrect = (this.get('content.answer') == this.get('myAnswer'));			

			this.set('isCorrect', isCorrect);
		}

		return isCorrect;
	}.property('myAnswer', 'content'),
});
