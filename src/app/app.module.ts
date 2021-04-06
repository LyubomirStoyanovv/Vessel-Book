import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShipListComponent } from './ships/ship-list.component'
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { ShipDetailComponent } from './ships/ship-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ShipDetailGuard } from './ships/ship-detail.guard';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ShipListComponent,
    ConvertToSpacesPipe,
    ShipDetailComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'ships', component: ShipListComponent },
      { 
        path: 'ships/:id', 
        canActivate:[ShipDetailGuard],
        component: ShipDetailComponent 
      },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
