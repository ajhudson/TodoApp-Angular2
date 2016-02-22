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
var TodoItem = (function () {
    function TodoItem() {
    }
    TodoItem.prototype.deleteTodo = function () {
        this.todo.setToCompleted();
    };
    TodoItem = __decorate([
        core_1.Component({
            selector: 'todo-item',
            properties: ['todo']
        }),
        core_1.View({
            template: "\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <strong>{{todo.title}}</strong>\n            </div>\n            <div class=\"col-md-4\" align=\"right\">\n                <span class=\"glyphicon glyphicon-user\"></span> {{todo.responsible}}\n            </div>\n        </div>\n        <hr>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                {{todo.description}}\n            </div>\n        </div>\n        <hr>\n        <div align=\"right\" class=\"row\">\n            <div class=\"col-md-12\">\n                <button class=\"btn btn-danger btn-sm\" (click)=\"deleteTodo()\"><span class=\"glyphicon glyphicon-trash\"></span> Delete</button>\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], TodoItem);
    return TodoItem;
})();
exports.TodoItem = TodoItem;
//# sourceMappingURL=TodoItem.js.map