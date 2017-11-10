import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let user = this.get('store').createRecord('user', {id: 1, name: 'user-patate', money: 300});
    user.save();
    let truck = this.get('store').createRecord('truck', {id: 1, type: 'truck-patate'});
    truck.save();
    return {
      user: this.get('store').findRecord('user',1),
      truckList: this.get('store').findAll('truck'),
      journeyList: this.get('store').findAll('journey'),
      typeList: [
        {name: 'truck-patate'}
      ]
    };
  }
});
