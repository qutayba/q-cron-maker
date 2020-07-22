import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { QCronMakerComponent } from './q-cron-maker.component';

@NgModule({
  declarations: [QCronMakerComponent],
  imports: [MatTabsModule],
  exports: [QCronMakerComponent],
})
export class QCronMakerModule {}
