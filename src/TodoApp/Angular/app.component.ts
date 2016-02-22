import {Component, View} from 'angular2/core';
import {TodosList} from './TodosList';
import {Todo} from './Todo';
import {AddTodo} from './AddToTodo';

@Component({
    selector: 'my-app'
})

@View({
        template: `
            <h4>Todos List</h4>
            <h5>Number of Todos: <span class="badge">{{incompleteTodos()}}</span><h5>
            <todos-list [todos]="todos"></todos-list>
            <add-todo [todos]="todos"></add-todo>
        `,
        directives: [TodosList, AddTodo]
})

export class AppComponent {
    todos: Array<Todo>;

    constructor() {
        this.todos = [
            new Todo("First item", "first description", "Andy H"),
            new Todo("Second item", "second description", "Bobby Dazzler"),
            new Todo("Third item", "third description", "Jimmy Riddle")
        ];
    }

    incompleteTodos() {
        var count: number;

        count = 0;

        for (var t of this.todos) {
            if (!t.completed) {
                count++;
            }
        }

        return count;
    }
}