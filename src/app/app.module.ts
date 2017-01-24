import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule }     from '@angular/http';
import { AppComponent }   from './app.component';
import {UserService}      from './services/user.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
  	
	],
  declarations: [
    AppComponent
  ],
 providers: [
    UserService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
