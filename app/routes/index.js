import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      user: {name: 'userName', money: '30'},
      truckList: [{name: 'truck1'}, {name: 'truck2'}, {name: 'truck3'}],
      typeList: ['type1', 'type2', 'type3'],
      journeyList: [{name: 'journey1'}, {name: 'journey2'}, {name: 'journey3'}]
    };
  }
});
