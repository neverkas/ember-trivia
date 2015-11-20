import Ember from 'ember';

export default Ember.Component.extend({
	data: [],
	placeholder: null,

	changeContent: function(){
		if(this.data.content.length > 0){
			var _self = this;

			Ember.run.next(function(){
				_self.$('select').material_select();	
			});
		}
	}.observes('data', 'data.content.[]')
});
