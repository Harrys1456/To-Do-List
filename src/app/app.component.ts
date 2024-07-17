import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialsModule } from '../materials.module';


import { OptionDialogComponent } from './option-dialog/option-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'to-do-list';

  constructor(public dialog: MatDialog){}

  openDialog() : void{
    //console.log("Open Dialog")
    const dialog_ref = this.dialog.open(OptionDialogComponent, { width: '400px',})
  }
}
