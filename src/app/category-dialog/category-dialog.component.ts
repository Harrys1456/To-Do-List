import { Component } from '@angular/core';

import { MaterialsModule } from '../../materials.module';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-option-dialog',
  standalone: true,
  imports: [MaterialsModule],
  templateUrl: './category-dialog.component.html',
  styleUrl: './category-dialog.component.css'
})
export class CategoryDialogComponent {
  constructor(public dialogRef: MatDialogRef<CategoryDialogComponent>){}

  onClickClose(){
    this.dialogRef.close();
  }
}
