import Ember from 'ember';

export default Ember.Component.extend({
  updateRentalForm: false,
  actions: {
    updateRentalForm() {
      this.set('updateRentalForm', true);
    },
    update1(rental) {
      if (this.get('owner') === '') {
        var owner = rental.get('owner');
      } else {
        var owner = this.get('owner');
      }
      var params = {
        owner: owner,
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        bedrooms: this.get('bedrooms'),
      };
      this.set('updateRentalForm', false),
      this.sendAction('update2', rental, params);
    }
  }
});
