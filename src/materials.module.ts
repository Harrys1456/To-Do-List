import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconButton } from '@angular/material/button';
import { MatDialogModule,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
 } from '@angular/material/dialog';
 import { MatListModule } from '@angular/material/list';
 import {MatMenuModule} from '@angular/material/menu';
 import {MatFormFieldModule} from '@angular/material/form-field';
 import {MatInputModule} from '@angular/material/input';
 import { MatCardModule } from '@angular/material/card';
 import { MatDatepickerModule } from '@angular/material/datepicker';
 import { MatNativeDateModule } from '@angular/material/core';
 import { MatSnackBarModule } from '@angular/material/snack-bar';
 import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [],
  imports: [
    MatIconModule,
    MatIcon,
    MatIconButton,
    MatButtonModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatDialogModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatSelectModule
  ],
  exports: [
    MatIconModule,
    MatIcon,
    MatIconButton,
    MatButtonModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatDialogModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatSelectModule
  ]
})
export class MaterialsModule { }
