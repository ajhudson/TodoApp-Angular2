var Todo = (function () {
    function Todo(title, desc, responsible) {
        this.title = title;
        this.description = desc;
        this.responsible = responsible;
        this.completed = false;
    }
    Todo.prototype.setToCompleted = function () {
        this.completed = true;
        return false;
    };
    return Todo;
})();
exports.Todo = Todo;
//# sourceMappingURL=Todo.js.map