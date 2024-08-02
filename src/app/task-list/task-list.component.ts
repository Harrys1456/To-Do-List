import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MaterialsModule } from '../../materials.module';
import { FormsModule } from '@angular/forms';
import { Category } from '../model/category';
import { Task } from '../model/task';
import { MatSnackBar } from '@angular/material/snack-bar';


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
  public status_list: string[] = ["Incomplete", "Complete"]
  public add_task_status: boolean = false;

  constructor(private _snackbar: MatSnackBar){}

  ngOnInit(): void {
    this.task_list = this.category.getTasks()
  }

  ngOnChanges(val: any){
    this.category = val.category.currentValue
    this.task_list = this.category.getTasks()
  }

  public addTask(): void{
    this.add_task_status = true
  }

  public onSubmit(): void{
    this.category.addTask(this.task_info);
    this._snackbar.open("Added task to " + this.category.category_title + " successfully!") 
  }

}
