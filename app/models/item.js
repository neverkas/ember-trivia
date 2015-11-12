import DS from 'ember-data';

export default DS.Model.extend({
	question: DS.attr('string'),
	answer: DS.attr('string'),
//	isCorrect: DS.attr('boolean'),
	
	labelQuestion: function(){
		var string;
			string = '¿' + this.get('question') + '?';
	}
});
