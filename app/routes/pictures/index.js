import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		var pictures =  this.modelFor('places/show').get('pictures');
		if (pictures.get('isFullfilled')) {
			pictures.reload();
		}

		return pictures;
	}
});
