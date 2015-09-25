import Ember from 'ember';

export function formatDate(date) {
  return moment(date.to_s).format('LL');
}

export default Ember.Helper.helper(formatDate);
