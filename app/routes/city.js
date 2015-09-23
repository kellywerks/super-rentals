import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      city: this.store.findRecord('city', params.city_id),
      rentals: this.store.query('rental', { filter: { city: params.city_id } })
    });
  },

  actions: {
    saveCity(params) {
      var newCity = this.store.createRecord('city', params);
      newCity.save();
      this.transitionTo('index');
    },

    saveRental(city, params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      city.save();
      this.transitionTo('index');
    },

    destroyCity(city) {
      city.destroyRecord();
      this.transitionTo('index');
    },
  }
});
