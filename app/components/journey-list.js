import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showJourney(journey) {
      alert(journey.name);
    },
    openModal(name) {
      $('.ui.' + name + '.modal').modal('show');
    }
  }
});
