import Ember from 'ember';

export default Ember.Component.extend({
  updateRental: false,
  actions: {
    updateRental(rental, params) {
      this.sendAction('updateRental', rental, params);
    },
    destroyRental(rental) {
      if (confirm('Are you sure you want to delete this rental?')) {
        this.sendAction('destroyRental', rental);
      }
    }
  }
});
