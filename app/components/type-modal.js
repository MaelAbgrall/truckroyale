import UiModal from 'semantic-ui-ember/components/ui-modal';

export default UiModal.extend({
  name: 'type',
  classNames: [ 'type' ],

  actions: {
    yes: function() {
      alert('yes');
      this.execute('hide');
    },

    no: function() {
      alert('no');
    }
  }
});
