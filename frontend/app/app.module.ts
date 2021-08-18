import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CountersComponent } from './counters/counters.component';
import { CounterFormComponent } from './counter-form/counter-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CountersComponent,
    CounterFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
