import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { QCronMakerComponent } from './q-cron-maker.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [QCronMakerComponent],
  imports: [CommonModule, FormsModule, MatExpansionModule, MatSlideToggleModule, MatRadioModule, MatSelectModule],
  exports: [QCronMakerComponent],
})
export class QCronMakerModule { }
