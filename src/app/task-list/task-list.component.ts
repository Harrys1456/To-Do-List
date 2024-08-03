import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from '../../materials.module';
import { FormsModule } from '@angular/forms';
import { Category } from '../model/category';
import { Task } from '../model/task';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [MaterialsModule, FormsModule, CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {


  @Input() category: Category = new Category("")
  public task_list: Task[] = [];
  public task_info: Task = new Task("");
  public status_list: string[] = ["Incomplete", "Complete"]
  public show_form_status: boolean = false;
  public add_task_status: boolean = false;

  constructor(private _snackbar: MatSnackBar){}

  ngOnInit(): void {
    this.task_list = this.category.getTasks();
  }

  ngOnChanges(val: any){
    this.category = val.category.currentValue;
    this.task_list = this.category.getTasks();
    this.show_form_status = false;
    this.add_task_status = false;
    this.task_info = new Task("")
  }

  public addTask(): void{
    this.show_form_status = true;
    this.add_task_status = true;
    this.task_info = new Task("")
  }

  public onSubmit(): void{
    if (this.add_task_status == true){
      this.category.addTask(this.task_info);
      this.add_task_status = false;
      this._snackbar.open("Added task to " + this.category.category_title + " successfully!", undefined, {duration: 3000});
    } else{
      this._snackbar.open("Updated task for " + this.category.category_title + " successfully!", undefined, {duration: 3000});
    }
  }

  public selectTask(selected_task: Task): void{
    this.task_info = selected_task;
    this.show_form_status = true;
    this.add_task_status = false;
  }

}
