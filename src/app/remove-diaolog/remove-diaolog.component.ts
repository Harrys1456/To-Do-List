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

  constructor(public dialogRef: MatDialogRef<RemoveDiaologComponent>){}


  onClickClose(): void{
    this.dialogRef.close();
  }
}
