var App = Ember.Application.create();

App.ApplicationController = Ember.ObjectController.extend({
    actions: {
        addItem: function() {
            console.log('clicked!!');
            this.get('content').pushObject(
                  Ember.Object.create({
                      id: $('#input-id').val(),
                      name: $('#input-name').val(),
                      age: $('#input-age').val()
                  })
            )
        }
    }
});

App.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return [
        {id: 1, name: 'hoge', age: 21},
        {id: 2, name: 'boo', age: 31},
        {id: 3, name: 'bar', age: 36}
    ]}
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

