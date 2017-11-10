import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showTruck(truck) {
      alert(truck.name);
    },
    openModal(name, truck) {
      $(`#${truck.name}`).modal('show');
    }
  }
});
