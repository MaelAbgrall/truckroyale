import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('journey-modal', 'Integration | Component | journey modal', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{journey-modal}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#journey-modal}}
      template block text
    {{/journey-modal}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
