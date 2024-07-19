import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialsModule } from '../materials.module';


import { CategoryDialogComponent } from './category-dialog/category-dialog.component';
import { RemoveDiaologComponent } from './remove-diaolog/remove-diaolog.component';
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
  readonly added_category = signal('')

  constructor(public dialog: MatDialog){}

  openCategoryDialog() : void{
    const dialog_ref = this.dialog.open(CategoryDialogComponent, { width: '350px', data : {category: this.added_category()}})
    dialog_ref.afterClosed().subscribe((result) => {
      if(result !== undefined){
        this.added_category.set(result);
        this.categories?.push(this.added_category())
      }
    })
  }

  categorySelect(e: MouseEvent) : void {
    const input = e.target as HTMLElement
    this.selected_category = input.innerText;
  }

  openRemoveDialog() : void {
    const dialog_ref = this.dialog.open(RemoveDiaologComponent, {width: '350px'})

    dialog_ref.afterClosed().subscribe(result => {
      console.log("closed removal dialog")
    })
  }
}
