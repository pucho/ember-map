import DS from 'ember-data';

export default DS.Model.extend({
	description: DS.attr('string'),
  	lat: DS.attr('string'),
  	lng: DS.attr('string'),
  	name: DS.attr('string'),
  	pictures: DS.hasMany('picture', {async: true})
  	  
});
