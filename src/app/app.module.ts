import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VrgPageExampleModule } from './vrg-page-example/vrg-page-example.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    VrgPageExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
