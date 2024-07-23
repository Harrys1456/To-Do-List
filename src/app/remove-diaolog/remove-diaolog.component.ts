import { Component, inject, model } from '@angular/core';
import { Observable } from 'rxjs';
import {FormsModule} from '@angular/forms';
import { MaterialsModule } from '../../materials.module';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

import { Category } from '../model/category';

@Component({
  selector: 'app-remove-diaolog',
  standalone: true,
  imports: [FormsModule, MaterialsModule, CommonModule],
  templateUrl: './remove-diaolog.component.html',
  styleUrl: './remove-diaolog.component.css'
})
export class RemoveDiaologComponent {

  readonly data = inject<{category_list: Observable<Category[]> | undefined}>(MAT_DIALOG_DATA)
  readonly category_list$ = this.data.category_list;
  next_click: boolean = false;
  selected_categories: string[] | undefined;
  
  constructor(public dialogRef: MatDialogRef<RemoveDiaologComponent>){}

  onClickClose(): void{
    this.dialogRef.close();
  }

  onNextClick(size: number): void{
    if(size > 0){
      this.next_click = true
    }
  }

  onNoClick(): void{
    this.next_click = false;
  }

}
