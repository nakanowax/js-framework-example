(function(){

    console.log("Hello Backbone!");

    var obj1 = new Backbone.Model();
    obj1.set({id: 1});
    obj1.set({name: "hoge"});
    obj1.set({age: 21});

    console.log("obj: " + JSON.stringify(obj1));
    console.log("obj.name: " + obj1.get("name"));

    var obj2 = new Backbone.Model();
    obj2.set({id: 2});
    obj2.set({name: "boo"});
    obj2.set({age: 35});

    var obj3 = new Backbone.Model();
    obj3.set({id: 3});
    obj3.set({name: "bar"});
    obj3.set({age: 45});

    var objs = new Backbone.Collection([obj1,obj2]);
    objs.add(obj3);
    console.log("objs: " + JSON.stringify(objs));
    console.log("objs length: " + JSON.stringify(objs.length));
    console.log("objs get: " + JSON.stringify(objs.get("c3")));
    console.log("objs at: " + JSON.stringify(objs.at(0)));

/*
    var View = new Backbone.View.extend({
        el: $("#view1"),
        events: {
            "click": function(e) { console.log("Hello!!!"); }
        }
    });
*/
    var MyView = Backbone.View.extend({
        tagName: "span",
        id: "foo",
        events: {
            "click": function(e) { console.log("Hello!!!"); }
        }
    });
    var myView = new MyView();
    $("h1").append(myView.el);
}());
