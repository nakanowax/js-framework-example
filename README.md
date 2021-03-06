## 比較

* [TodoMVC](http://todomvc.com/)
* [The Top 10 Javascript MVC Frameworks Reviewed](http://codebrief.com/2012/01/the-top-10-javascript-mvc-frameworks-reviewed/)

ライブラリ名 | ver | ドキュメント | サイズ | 依存 | 依存ライブラリ |  html | js 
-------------|-----|--------------|--------|------|-----------------|----|------
[Backbone.js](http://backbonejs.org/)  | 1.1.0 | 豊富 |  19kb | 有 | jQuery,underscore,json2 | [index.html](https://github.com/nakanowax/js-framework-example/blob/master/backbone.js/index.html) | [app.js](https://github.com/nakanowax/js-framework-example/blob/master/backbone.js/js/app.js)
[Ember.js](http://emberjs.com/) | 1.3.0 | わりかし | 67kb | 有 | JQuery,handlebars, | [index.html](https://github.com/nakanowax/js-framework-example/blob/master/ember.js/index.html) | [app.js](https://github.com/nakanowax/js-framework-example/blob/master/ember.js/js/app.js)
[Knockout.js](http://knockoutjs.com/) | 3.0.0 | わりかし | 45kb | 無 | - | [index.html](https://github.com/nakanowax/js-framework-example/blob/master/knockout.js/index.html) | [app.js](https://github.com/nakanowax/js-framework-example/blob/master/knockout.js/js/app.js)
[Angular.js](http://angularjs.org/) | 1.2.7 | わりかし | 98kb | 無 | - | [index.html](https://github.com/nakanowax/js-framework-example/blob/master/angular.js/index.html) | [app.js](https://github.com/nakanowax/js-framework-example/blob/master/angular.js/js/app.js)

## Backbone.js
### メリット
* http://hosokawa0825.github.io/slides/JavascriptFrameworksOverview/#backbonejs-features-1

### デメリット
* http://hosokawa0825.github.io/slides/JavascriptFrameworksOverview/#backbonejs-features-2

### 所感
* テンプレート周りはあまり充実していない感じ。
 * なので、JQuery等を使って、DOMの紐付けをして、Viewを構成する感じ。
* いい意味でView周りのライブラリを入れても書き方は変わらなそう。
* でもその分View周りのコードをほかのライブラリに比べて記述が増えそうな感じ

## Ember.js
### メリット/デメリット
* http://hosokawa0825.github.io/slides/JavascriptFrameworksOverview/#emberjs-features-1

### 所感
* View部分の機能とか充実している気がする。
* Knockout.js,Angular.jsよりは、View(html)の実装がちょっと分かりにくい感じがする。
* エラーでるけど原因がわかりにくい。
* View側のライブラリ(Grid周り)との接続部分が要検討・・・。

## Knockout.js
### メリット/デメリット
* http://hosokawa0825.github.io/slides/JavascriptFrameworksOverview/#KnockoutJS-features-1

### 所感
* Viewはhtmlなので、奇麗な気がする
* Viewの書き方も割と違和感なくかける気がします。
* 簡単なアプリだとさくさくつくれそう。
* View,ViewModel,Modelの紐付けが奇麗にできれば、奇麗に作れるかも。
* View側のライブラリ(Grid周り)との接続部分が要検討・・・。

## Angular.js
### メリット/デメリット
* http://hosokawa0825.github.io/slides/JavascriptFrameworksOverview/#AngularJS-features-1

### 所感
* Knockout.js同様View側が奇麗。
* 簡単なものなら、Knockout.jsよりも簡単にスピードも出そう。
* 難しくなると、ng-なんちゃら等のView側の処理ではまりそうな気もする。。。
* View側のライブラリ(Grid周り)との接続部分が要検討・・・。


## 比較要参考サイト
* http://qiita.com/icoxfog417/items/3c68e1a4de7121658e29
* http://hosokawa0825.github.io/slides/JavascriptFrameworksOverview/
* http://yslibr4ry.blogspot.jp/2012/07/31-html5-javascript-mvc.html
