export class Todo {
    title: string;
    description: string;
    responsible: string;
    completed: boolean;

    constructor(title, desc, responsible) {
        this.title = title;
        this.description = desc;
        this.responsible = responsible;
        this.completed = false;
    }

    setToCompleted() {
        this.completed = true;
        return false;
    }
}