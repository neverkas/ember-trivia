import Ember from 'ember';

export default Ember.Component.extend({
	showResult: false,
	showAnswers: false,

	isCorrect: function(){
		var isCorrect;

		if(this.get('answer') && this.get('answer').length > 0){
			isCorrect = (this.get('content.answer') == this.get('answer'));			

			this.set('isCorrect', isCorrect);
		}

		return isCorrect;
	}.property('answer', 'content'),

	checkQuestion: function(){
		//return (this.get('showResult') == true && this.get('isCorrect') == true)
	}.property('showResult', 'isCorrect')
});
