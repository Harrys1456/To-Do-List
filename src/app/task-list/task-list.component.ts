import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MaterialsModule } from '../../materials.module';
import { Category } from '../model/category';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [MaterialsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  @Input() category: Category = new Category("")
  public task_list: string[] = [];

  constructor(){}

  public addTask(): void{
    let test = "Test";
    this.task_list.push(test);
  }
}
