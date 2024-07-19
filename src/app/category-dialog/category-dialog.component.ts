import { Component, inject, model } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { MaterialsModule } from '../../materials.module';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-option-dialog',
  standalone: true,
  imports: [MaterialsModule, FormsModule],
  templateUrl: './category-dialog.component.html',
  styleUrl: './category-dialog.component.css'
})
export class CategoryDialogComponent {

  readonly data = inject<{added_category: string | undefined}>(MAT_DIALOG_DATA)
  readonly category = model(this.data.added_category);

  constructor(public dialogRef: MatDialogRef<CategoryDialogComponent>){}

  onClickClose(){
    this.dialogRef.close();
  }
}
