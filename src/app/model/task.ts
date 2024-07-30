export class Task{
    
    public detail: string = ""
    private is_complete: boolean = false;

    constructor(public title: string){}

    // Get the name of the task
    getTitle(): string{
        return this.title;
    }

    // Set the name of the task
    setName(title: string){
        this.title = title;
    }

    // Get the detail of the task
    getDetail(): string {
        return this.detail
    }

    // Marks the task as completed
    markCompleted(): void{
        this.is_complete = true;
    }

    // Marks the task as incompleted
    markIncompleted(): void{
        this.is_complete = false;
    }
}