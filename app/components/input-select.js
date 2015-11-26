import Ember from 'ember';

export default Ember.Component.extend({
	data: null,
	placeholder: null,

	changeContent: function(){
		if(this.data.isFulfilled){
			var _self = this;

			Ember.run.next(function(){
				_self.$('select').material_select();	
			});
		}
	}.observes('data', 'data.isFulfilled' , 'data.content.[]')
});
