import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let truck = this.get('store').createRecord('truck', {
      id: 1,
      name: 'TruckPatate'
    });
    truck.save();
    return {
      user: {name: 'userName', money: '30'},
      truckList: this.get('store').findAll('truck'),
      typeList: ['type1', 'type2', 'type3'],
      journeyList: [{name: 'journey1'}, {name: 'journey2'}, {name: 'journey3'}]
    };
  }
});
