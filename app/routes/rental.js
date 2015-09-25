import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('rental', params.rental_id);
  },
  actions: {
    updateRental(rental, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          rental.set(key,params[key]);
        }
      });
      debugger;
      rental.save();
      alert(rental.owner);
    },
    destroyRental(rental) {
      rental.destroyRecord().then(function() {
        city.save();
      });
      this.transitionTo('index');
    }
  }
});
