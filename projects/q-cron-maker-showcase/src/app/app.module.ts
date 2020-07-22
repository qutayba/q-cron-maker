import { BrowserModule, } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { QCronMakerModule } from "projects/q-cron-maker/src/public-api";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, QCronMakerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
