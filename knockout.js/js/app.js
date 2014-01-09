// ViewModel を定義します
var ViewModel = function(first, last) {
    var self = this;
    self.firstName = ko.observable(first);
    self.lastName = ko.observable(last);

    self.fullName = ko.computed(function() {
        // Knockout は依存を自動的にトラッキングします。
        // fullName の評価中に firstName と lastName を呼び出すため、
        // それぞれに依存していることが検知されます。
        return self.firstName() + " " + self.lastName();
    }, self);


/*
    this.profile = ko.observableArray([
        { id: 1, name: 'hoge', age: 21 },
        { id: 2, name: 'boo',  age: 31 },
        { id: 3, name: 'bar',  age: 41 }
    ]);
*/

    self.profile = ko.observableArray();

    self.getData = function() {
        self.profile.removeAll();
        var url = "http://localhost:9292/get";
        $.getJSON(url, function(response) {
            for (var i = 0; i < response.data.length; i++) {
                self.profile.push(response.data[i]);
            }
        });
    };

    self.getDataFromPost = function() {
        self.profile.removeAll();
        var url = "http://localhost:9292/";
        var data = {method: 'getUserData'};
        $.post(url, ko.toJSON(data), function(response) {
            for (var i = 0; i < response.data.length; i++) {
                self.profile.push(response.data[i]);
            }
        });

    };

    self.inputId = ko.observable();
    self.inputName = ko.observable();
    self.inputAge = ko.observable();
    self.addItem = function() {
        self.profile.push({
            id: self.inputId,
            name: self.inputName,
            age: self.inputAge
        });
    };


    // 画面切り替え
    /*
        data-bind with: で指定された変数が、null,undefinedの場合は、
        その配下のDOMを表示しないというの使った場合の 画面遷移
    */
    self.currentView = ko.observable('page2');

    self.page1 = ko.computed(function(){
        if(self.currentView() == 'page1'){
            return new PageView(self.currentView());
        }else{
            return null;
        }
    });
    self.page2 = ko.computed(function(){
        if(self.currentView() == 'page2'){
            return new PageView(self.currentView());
        }else{
            return null;
        }
    });
};

var PageView = function(currentView) {
   pageName = ko.observable(currentView + 'です');
}

ko.applyBindings(new ViewModel('HOGE','BOO'));

