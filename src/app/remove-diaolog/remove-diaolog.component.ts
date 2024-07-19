import { Component, inject, model } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { MaterialsModule } from '../../materials.module';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-remove-diaolog',
  standalone: true,
  imports: [FormsModule, MaterialsModule],
  templateUrl: './remove-diaolog.component.html',
  styleUrl: './remove-diaolog.component.css'
})
export class RemoveDiaologComponent {

  readonly data = inject<{category_list: string[] | undefined}>(MAT_DIALOG_DATA)
  readonly category_list = this.data.category_list;
  next_click: boolean = false;
  
  constructor(public dialogRef: MatDialogRef<RemoveDiaologComponent>){}

  onClickClose(): void{
    console.log(this.category_list);
    this.dialogRef.close();
  }

  onNextClick(): void{

  }
}
