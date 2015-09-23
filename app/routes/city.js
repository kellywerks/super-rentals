import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('city', params.city_id);
  },

  actions: {
    saveCity(params) {
      var newCity = this.store.createRecord('city', params);
      newCity.save();
      this.transitionTo('index');
    },

    saveRental(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      params.city.save();
      this.transitionTo('city', params.city);
    },

    destroyCity(city) {
      city.destroyRecord();
      this.transitionTo('index');
    },
  }
});
