import Ember from 'ember';

export default Ember.Component.extend({
  addCityForm: true,
  actions: {
    cityFormShow() {
      this.set('addNewCity', true);
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
