import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { CalculatorOneComponent } from './calculator/calculatorOne.component';
import { CalculatorTwoComponent } from './calculator/calculatorTwo.component';

@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent,
    CalculatorOneComponent,
    CalculatorTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
