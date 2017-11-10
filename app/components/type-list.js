import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showType(type) {
      alert(type);
    },
    openModal(name) {
      $('.ui.' + name + '.modal').modal('show');
    }
  }
});
