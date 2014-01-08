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
        $.getJSON(url, function(data) {
            for (var i = 0; i < data.data.length; i++) {
                self.profile.push(data.data[i]);
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
};

ko.applyBindings(new ViewModel('HOGE','BOO'));

