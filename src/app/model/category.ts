import { Task } from "./task";

export class Category{

    private task_list: Task[] = []

    constructor(public category_title: string){}

    // Get the count of tasks for the category
    // return: the length of task list
    getTaskCount(): number{
        return this.task_list?.length;
    }

    // Adds the tasks to the task list
    addTask(task: Task): void{
        this.task_list.push(task);
    }

    // removes the task from the task list
    removeTask(task: Task): void{
        
    }
    
    // Marks the task as complete in task list
    markTaskComplete(task: Task): void{

    }

    // Marks the task as incomplete in task list
    markTaskIncomplete(task: Task): void{

    }
    
}