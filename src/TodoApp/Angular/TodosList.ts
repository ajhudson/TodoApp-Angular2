import {Component, View} from 'angular2/core';
import {Todo} from './Todo';
import {TodoItem} from './TodoItem';

@Component({
    selector: 'todos-list',
    properties: ['todos']
})

@View({
        template: `
            <ul class="list-group">
                <li *ngFor="#todo of todos" class="list-group-item">
                    <div *ngIf="todo.completed == false">
                        <todo-item [todo]="todo"></todo-item>
                    </div>
                </li>
            </ul>
    `,
    directives: [TodoItem]
})

export class TodosList {
    todos: Array<Todo>;

    constructor() {

    }
}