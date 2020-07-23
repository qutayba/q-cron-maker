import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { getQuartz } from 'cron-to-quartz';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInput, MatChipInputEvent } from '@angular/material/chips';
import { SelectionType, Expression, QCronMakerService } from './q-cron-maker.service';
import { Observable } from 'rxjs';
import { MatRadioChange } from '@angular/material/radio';
import { isNumber } from 'util';

@Component({
  selector: 'q-cron-maker',
  templateUrl: './q-cron-maker.component.html',
  styleUrls: ['./q-cron-maker.component.scss']
})
export class QCronMakerComponent implements OnInit {

  expression$: Observable<Expression>;
  SelectionType = SelectionType;
  options = {
    controls: {
      seconds: false,
      minutes: false,
      hours: false,
      days: false,
      months: true,
      years: true,
    }
  };

  seconds = [...Array(60).keys()];
  minutes = [...Array(60).keys()];
  hours = [...Array(24).keys()];
  days = [...Array(31).keys()].map(i => i + 1);
  weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  years = [];

  constructor(public service: QCronMakerService) {
    const test = getQuartz('* 12 * * *').toString();
    this.expression$ = service.expression$;
    service.updateOptions(this.options);
  }

  ngOnInit(): void { }

  updateExpressionState() {
    this.service.resetExpression();
  }

  clearParams(...params) {
    // We don't want to clear params with the blur event of mat-chips
    if (!!params[1] && !(params[1] instanceof MatRadioChange))
      return;

    this.service.clearParams(params[0]);
  }

  addYear(event: MatChipInputEvent): void {

    const input = event.input;
    const value = +(event.value || '').trim();

    if (value && isNumber(value))
      this.service.addYearChip(value);

    if (input) input.value = '';
  }

  removeYear(year): void {
    this.service.removeYearChip(year);
  }
}
