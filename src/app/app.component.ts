import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MaterialsModule } from '../materials.module';
import { CategoryService } from './services/category.service.service';
import { Category } from './model/category';

import { CategoryDialogComponent } from './category-dialog/category-dialog.component';
import { RemoveDiaologComponent } from './remove-diaolog/remove-diaolog.component';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'to-do-list';
  
  public categories$: Observable<Category[]> | undefined;
  //categories: string[] | undefined = ['Work', 'Home'];
  public selected_category: string | undefined = undefined;
  public added_category: string = ""

  constructor(public dialog: MatDialog, public category_service: CategoryService){}

  ngOnInit():void{
    this.categories$ = this.category_service.getCategories()
  }

  
  openCategoryDialog() : void{
    const dialog_ref = this.dialog.open(CategoryDialogComponent, { width: '350px', data : {category: this.added_category}})
    dialog_ref.afterClosed().subscribe((result) => {
      if(result !== undefined){
        this.added_category = result;
        
        this.category_service.createCategory(this.added_category)
        //this.categories?.push(this.added_category())
      }
    })
  }
  /*
  openRemoveDialog() : void {
    const dialog_ref = this.dialog.open(RemoveDiaologComponent, {width: '350px', data : {category_list: this.categories}})
    dialog_ref.afterClosed().subscribe(result => {
      if(result !== undefined){
        let result_values: string[] = result
        const filtered_categories: string [] | undefined = this.categories?.filter(item => !result_values.includes(item))
        this.categories = filtered_categories
      }
    })
  }*/

  categorySelect(e: MouseEvent) : void {
    const input = e.target as HTMLElement
    this.selected_category = input.innerText;
  }
  
}
