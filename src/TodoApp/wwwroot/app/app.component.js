var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var TodosList_1 = require('./TodosList');
var Todo_1 = require('./Todo');
var AddToTodo_1 = require('./AddToTodo');
var AppComponent = (function () {
    function AppComponent() {
        this.todos = [
            new Todo_1.Todo("First item", "first description", "Andy H"),
            new Todo_1.Todo("Second item", "second description", "Bobby Dazzler"),
            new Todo_1.Todo("Third item", "third description", "Jimmy Riddle")
        ];
    }
    AppComponent.prototype.incompleteTodos = function () {
        var count;
        count = 0;
        for (var _i = 0, _a = this.todos; _i < _a.length; _i++) {
            var t = _a[_i];
            if (!t.completed) {
                count++;
            }
        }
        return count;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app'
        }),
        core_1.View({
            template: "\n            <h4>Todos List</h4>\n            <h5>Number of Todos: <span class=\"badge\">{{incompleteTodos()}}</span><h5>\n            <todos-list [todos]=\"todos\"></todos-list>\n            <add-todo [todos]=\"todos\"></add-todo>\n        ",
            directives: [TodosList_1.TodosList, AddToTodo_1.AddTodo]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map