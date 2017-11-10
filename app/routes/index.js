import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    this.get('store').push({
      data: [{
        id: 1,
        type: 'truck',
        attributes: {
          name: 'truckpatate'
        },
        relationships: {}
      }]
    });
    return {
      user: {name: 'userName', money: '30'},
      truckList: [this.get('store').findRecord('truck', 1)],
      typeList: ['type1', 'type2', 'type3'],
      journeyList: [{name: 'journey1'}, {name: 'journey2'}, {name: 'journey3'}]
    };
  }
});
