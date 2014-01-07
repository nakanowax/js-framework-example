var App = Ember.Application.create();

App.ApplicationController = Ember.ObjectController.extend({});

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
