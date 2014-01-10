var App = Ember.Application.create();

App.Router.map(function() {
    this.route("aboutme");
});

DS.RESTAdapter.reopen({
    host: 'http://localhost:9292',
});

App.ApplicationController = Ember.ObjectController.extend({
    actions: {
        addItem: function() {
            this.get('content').pushObject(
                  Ember.Object.create({
                      id: $('#input-id').val(),
                      name: $('#input-name').val(),
                      age: $('#input-age').val()
                  })
            )
        },
        getData: function(){
            var url = "http://localhost:9292/get";
            $.getJSON(url, function(response) {
                console.log(response);
            });
        },
        getDataFromPost: function(){
            var url = "http://localhost:9292/";
            var data = {method: 'getUserData'};
            $.post(url, JSON.stringify(data), function(response) {
                console.log(response);
            });
        }
    }
});

App.People = DS.Model.extend({
    person: DS.hasMany('person')
});

App.Person = DS.Model.extend({
    id: DS.attr('number'),
    name: DS.attr('string'),
    age: DS.attr('number'),
    people: DS.belongsTo('people')
});


App.ApplicationRoute = Ember.Route.extend({
    model: function() {
        this.store.find(App.People, 'people/get/all', { name: 'HOGE'});
    }
    /*
    return [
        {id: 1, name: 'hoge', age: 21},
        {id: 2, name: 'boo', age: 31},
        {id: 3, name: 'bar', age: 36}
    ]
    */
});

App.PeopleView = Ember.View.extend({
    templateName: 'people',
});

App.OtherView = Ember.View.extend({
    templateName: 'other',
});

App.CountUpView = Ember.View.extend({
    templateName: 'countup',
    count: 1,
    click: function(evt){
        var current = this.get('count');
        this.set('count', current + 1);
    }
});

