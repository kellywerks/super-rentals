import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveRental(params) {
      this.sendAction('saveRental', params);
    },

    destroyCity(city) {
      if (confirm('Are you sure you want to delete this city?')) {
        this.sendAction('destroyCity', city);
      }
    }
  }
});
