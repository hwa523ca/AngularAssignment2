import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalcComponentComponent } from './calc-component/calc-component.component';

@NgModule({
  declarations: [ AppComponent, CalcComponentComponent ],
  imports: [ BrowserModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
