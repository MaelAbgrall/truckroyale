import UiModal from 'semantic-ui-ember/components/ui-modal';

export default UiModal.extend({
  actions: {
    yes: function() {
      this.execute('hide');
    }
  }
});
