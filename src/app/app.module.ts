import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { PageNotfound } from './page-notfound-component/page-notfound-component.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PageNotfound
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    DateTimePickerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
