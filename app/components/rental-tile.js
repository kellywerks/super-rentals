import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  updateRental: false,
  actions: {
    imageShow() {
      this.set('isImageShowing', true);
    },
    imageHide() {
      this.set('isImageShowing', false);
    },
    update(rental,params) {
      this.sendAction('update', rental, params);
    },
    delete(rental) {
      if (confirm('Are you sure you want to delete this rental?')) {
        this.sendAction('destroyRental', rental);
      }
    }
  }
});
