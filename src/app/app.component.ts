import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialsModule } from '../materials.module';


import { CategoryDialogComponent } from './category-dialog/category-dialog.component';
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
  categories: string[] | undefined = ['Work', 'Home'];
  selected_category: string | undefined = undefined;

  constructor(public dialog: MatDialog){}

  openCategoryDialog() : void{
    const dialog_ref = this.dialog.open(CategoryDialogComponent, { width: '350px',})
    
    dialog_ref.afterClosed().subscribe((result) => {
      console.log("Dialog closed");
    })
  }

  categorySelect(e: MouseEvent) : void {
    const input = e.target as HTMLElement
    this.selected_category = input.innerText;
  }
}
