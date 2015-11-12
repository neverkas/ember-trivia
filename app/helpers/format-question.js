import Ember from 'ember';

export function formatQuestion(str) {
	var question = String(str);
	
	return "¿" + question.charAt(0).toUpperCase() + question.slice(1) + "?";
}

export default Ember.Helper.helper(formatQuestion);
