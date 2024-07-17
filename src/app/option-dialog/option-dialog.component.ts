import { Component } from '@angular/core';

import { MaterialsModule } from '../../materials.module';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-option-dialog',
  standalone: true,
  imports: [MaterialsModule],
  templateUrl: './option-dialog.component.html',
  styleUrl: './option-dialog.component.css'
})
export class OptionDialogComponent {
  constructor(public dialogRef: MatDialogRef<OptionDialogComponent>){}

  onClickClose(){
    this.dialogRef.close();
  }
}
