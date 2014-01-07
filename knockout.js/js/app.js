// ViewModel を定義します
var ViewModel = function(first, last) {
    this.firstName = ko.observable(first);
    this.lastName = ko.observable(last);

    this.fullName = ko.computed(function() {
        // Knockout は依存を自動的にトラッキングします。
        // fullName の評価中に firstName と lastName を呼び出すため、
        // それぞれに依存していることが検知されます。
        return this.firstName() + " " + this.lastName();
    }, this);


    this.profile = ko.observableArray([
        { id: 1, name: 'hoge', age: 21 },
        { id: 2, name: 'boo',  age: 31 },
        { id: 3, name: 'bar',  age: 41 }
    ]);
};

ko.applyBindings(new ViewModel('HOGE','BOO'));

