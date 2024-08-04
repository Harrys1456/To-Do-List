import { Task } from "./task";

export class Category{

    private task_list: Task[] = []
    public task_id_count = 1;

    constructor(public category_title: string){}

    getTasks(): Task[]{
        return this.task_list;
    }

    // Get the count of tasks for the category
    // return: the length of task list
    getTaskCount(): number{
        return this.task_list?.length;
    }

    // Adds the tasks to the task list
    addTask(task: Task): void{
        task.id = this.task_id_count;
        this.task_list.push(task);
        this.task_id_count++;
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