import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MaterialsModule } from '../../materials.module';
import { Category } from '../model/category';
import { Task } from '../model/task';


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [MaterialsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  @Input() category: Category = new Category("")
  public task_list: Task[] = [];

  constructor(){}

  ngOnInit(): void {
    this.task_list = this.category.getTasks()
  }

  ngOnChanges(val: any){
    console.log("Change occurred");
    console.log(val.category.currentValue);
    this.category = val.category.currentValue
    this.task_list = this.category.getTasks()
  }

  public addTask(): void{
    let test = "Test";
    this.category.addTask(new Task("Test"))
    //this.task_list.push(test);
  }
}
