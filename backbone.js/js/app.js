(function(){

    console.log("Hello Backbone!");

    var obj = new Backbone.Model();

    obj.set({name: "test"});
    obj.set({age: 21});

    console.log("obj: " + JSON.stringify(obj));
    console.log("obj.name: " + obj.get("name"));
}());
