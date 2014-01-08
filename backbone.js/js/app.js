(function(){

    // model/view
    console.log("Hello Backbone!");
    var obj = new Backbone.Model();
    obj.set({id: 0});
    obj.set({name: "test"});
    obj.set({age: 10});

    var ShowModelView = Backbone.View.extend({
        events: {
            "click .model": "countUp"
        },
        initialize: function (options) {
            _.bindAll(this, "render");
            this.model.bind("change", this.render);
            this.render(); 
        },
        render: function () {
            $(this.el).html(_.template($("#ModelView-template").html(), this.model.attributes));
        },
        countUp: function () {
            this.model.set({age: this.model.get('age') + 1});
        }
    });
    var showModelView = new ShowModelView({el: $(".row"), model: obj});


    // collection/view
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

    var ShowCollectionView = Backbone.View.extend({
        events: {
            "click .collection": "countUp"
        },
        initialize: function (options) {
            _.bindAll(this, "render");
            this.collection.bind("change", this.render);
            this.render(); 
        },
        render: function () {
            this.collection.each(function(model){
                $(this.el).append(_.template($("#CollectionView-template").html(), model.attributes));
            }, this);
        },
        countUp: function () {
            // ここちゃんと出来てない。。。
            this.collection.each(function(model){
                model.set({age: model.get('age') + 1});
            }, this);
        }
    });
    var showCollectionView = new ShowCollectionView({el: $(".row"), collection: objs});

    // 追加処理
    var AddView = Backbone.View.extend({
        el: $("#input-data"),
        events: {
            "click #button-add": "addItem"
        },
        addItem: function () {
            var addData = new Backbone.Model();
            addData.set({id: $("#input-id").val()});
            addData.set({name: $("#input-name").val()});
            addData.set({age: $("#input-age").val()});
            $(".row").append(_.template($("#CollectionView-template").html(), addData.attributes));
        }
    });
    var addView = new AddView();


}());
