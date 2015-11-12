import Ember from 'ember';

export default Ember.Component.extend({
	myAnswer: '',
	showResult: false,
	showAnswers: false,

	isCorrect: function(){
		var isCorrect;

		if(this.get('myAnswer') && this.get('myAnswer').length > 0){
			isCorrect = (this.get('content.answer') == this.get('myAnswer'));			

			this.set('isCorrect', isCorrect);
		}

		return isCorrect;
	}.property('myAnswer', 'content'),
});
