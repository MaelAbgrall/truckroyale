import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  type: DS.attr('string'),
  name: computed('type', 'id', function() {
    return `${this.get('type')}${this.get('id')}`;
  })
});
