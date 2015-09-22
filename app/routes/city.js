import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('city', params.city_id);
  },

  actions: {
    destroyCity(city) {
      city.destroyRecord();
      this.transitionTo('index');
    },
  }
});
