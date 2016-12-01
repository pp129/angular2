import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1 class="text-center">Hello {{name}}</h1>`,
})
export class AppComponent  { name = 'Angular'; }
