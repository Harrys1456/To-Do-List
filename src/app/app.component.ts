import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialsModule } from '../materials.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'to-do-list';
}
