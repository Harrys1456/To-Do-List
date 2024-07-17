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
  ]
})
export class MaterialsModule { }
