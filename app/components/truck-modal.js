import UiModal from 'semantic-ui-ember/components/ui-modal';

export default UiModal.extend({
  name: 'truck',
  classNames: [ 'truck' ],

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
