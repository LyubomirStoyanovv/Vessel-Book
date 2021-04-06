import { Component } from '@angular/core';

@Component({

  selector: 'pm-root',
  template: `
  <div><h1>{{pageTitle}}</h1>
    <pm-ships></pm-ships>
  </div>
  `
})

export class AppComponent {

  pageTitle: string = 'Ships App';
  title: any;
}
