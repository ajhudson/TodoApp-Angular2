﻿import {Component, View} from 'angular2/core';
import {Todo} from './Todo';

@Component({
    selector: 'todo-item',
    properties: ['todo']
})

@View({
    template: `
        <div class="row">
            <div class="col-md-8">
                <strong>{{todo.title}}</strong>
            </div>
            <div class="col-md-4" align="right">
                <span class="glyphicon glyphicon-user"></span> {{todo.responsible}}
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-md-12">
                {{todo.description}}
            </div>
        </div>
        <hr>
        <div align="right" class="row">
            <div class="col-md-12">
                <button class="btn btn-danger btn-sm" (click)="deleteTodo()"><span class="glyphicon glyphicon-trash"></span> Delete</button>
            </div>
        </div>
    `
})

export class TodoItem {
    todo: Todo;

    constructor() {
    }

    deleteTodo() {
        this.todo.setToCompleted();
    }
}