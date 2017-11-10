import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    openModal(name) {
      $(`#${name}`).modal('show');
    }
  }
});
