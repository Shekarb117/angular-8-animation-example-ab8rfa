import { Component } from '@angular/core';
import { fadeInAnimation } from './_animations';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  animations: [fadeInAnimation],
})
export class AppComponent {}
