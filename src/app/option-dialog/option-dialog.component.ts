import { Component } from '@angular/core';

import { MaterialsModule } from '../../materials.module';

@Component({
  selector: 'app-option-dialog',
  standalone: true,
  imports: [MaterialsModule],
  templateUrl: './option-dialog.component.html',
  styleUrl: './option-dialog.component.css'
})
export class OptionDialogComponent {

}
