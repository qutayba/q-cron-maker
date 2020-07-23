import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { QCronMakerComponent } from './q-cron-maker.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OrdinalPipe } from './ordinal.pipe';

@NgModule({
  declarations: [QCronMakerComponent, OrdinalPipe],
  imports: [
    CommonModule,
    FormsModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule,
    MatChipsModule,
    MatInputModule],
  exports: [QCronMakerComponent],
})
export class QCronMakerModule { }
