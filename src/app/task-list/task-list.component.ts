import { Component } from '@angular/core';
import { MaterialsModule } from '../../materials.module';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [MaterialsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

    public task_list: string[] = [];

    constructor(){}

    public addTask(): void{
      let test = "Test";
      this.task_list.push(test);
    }
}
