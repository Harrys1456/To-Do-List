import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MaterialsModule } from '../../materials.module';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { Category } from '../model/category';
import { Task } from '../model/task';


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [MaterialsModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {


  @Input() category: Category = new Category("")
  public task_list: Task[] = [];
  public task_info = new Task("")

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

  public onSubmit(): void{
    this.category.addTask(this.task_info)
    this.task_info = new Task("")
    
  }
}
