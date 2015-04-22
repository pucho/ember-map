import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('places', function(){
  	this.route('show', {path: ':place_id'}, function() {
  		this.resource('pictures', function() {});
  	});
  });
});


export default Router;

