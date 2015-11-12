import Ember from 'ember';

export default Ember.Component.extend({
	answerCheck: function(){
		var isCorrect;

		if(this.get('answer') && this.get('answer').length > 0){
			isCorrect = (this.get('content.answer') == this.get('answer'));			

			this.set('isCorrect', isCorrect);
		}

		return isCorrect;
	}.property('answer', 'content'),


});
