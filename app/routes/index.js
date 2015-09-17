import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('rental');
  },

  actions: {
    save() {
      newRental.save();
      this.transitionToRoute('index');
    },

    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionToRoute('index');
    }
  }
});
