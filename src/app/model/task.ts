export class Task{
    
    is_complete: boolean = false;

    constructor(public task_title: string){}


    // Marks the task as completed
    markCompleted(): void{
        this.is_complete = true;
    }

    // Marks the task as incompleted
    markIncompleted(): void{
        this.is_complete = false;
    }
}