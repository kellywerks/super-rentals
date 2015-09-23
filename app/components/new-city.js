import Ember from 'ember';

export default Ember.Component.extend({
  addCityForm: false,
  actions: {
    showCityForm() {
      this.set('addCityForm', true);
    },

    saveCity() {
      var params = {
        name: this.get('name'),
        attractions: this.get('attractions'),
        country: this.get('country')
      };
      this.sendAction('saveCity', params);
    }
  }
});
