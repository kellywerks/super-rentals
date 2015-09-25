import Ember from 'ember';

export default Ember.Route.extend({
  today: Date.now(),
  model() {
    return Ember.RSVP.hash({
      cities: this.store.findAll('city'),
      rentals: this.store.findAll('rental')
    });
  },

  actions: {
    saveCity(params) {
      var newCity = this.store.createRecord('city', params);
      newCity.save();
      this.transitionTo('index');
    },

    updateRental(rental, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          rental.set(key,params[key]);
        }
      });
      rental.save();
      this.transitionTo('index');
    },

    destroyRental(rental) {
      rental.destroyRecord().then(function() {
        city.save();
      });
      this.transitionTo('index');
    }
  }
});
