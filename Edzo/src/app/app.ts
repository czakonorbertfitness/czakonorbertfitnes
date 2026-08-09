import { Component } from '@angular/core';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Home],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}