import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
export interface Taskset {
  taskset_Id: string;
  taskset_name: string;
  user_Id: string;
  tasklist: [];
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Todo_App';
}
