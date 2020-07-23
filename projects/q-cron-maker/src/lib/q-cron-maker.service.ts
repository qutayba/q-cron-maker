import { Injectable } from '@angular/core';
import { Subject, of } from 'rxjs';

export enum SelectionType {
  All, Repeated, RepeatedWeekly, Specific, Range, WeekDay
}

export interface Expression {
  seconds: {
    type?: SelectionType,
    params?: any
  },
  minutes: {
    type?: SelectionType,
    params?: any
  },
  hours: {
    type?: SelectionType,
    params?: any
  },
  days: {
    type?: SelectionType,
    params?: any
  },
  months: {
    type?: SelectionType,
    params?: any
  },
  years: {
    type?: SelectionType,
    params?: any
  }
}

@Injectable({
  providedIn: 'root'
})
export class QCronMakerService {

  private options;
  private expression: Expression = {
    seconds: {
      type: null,
      params: {}
    },
    minutes: {
      type: null,
      params: {}
    },
    hours: {
      type: null,
      params: {}
    },
    days: {
      type: null,
      params: {}
    },
    months: {
      type: null,
      params: {}
    },
    years: {
      type: null,
      params: {}
    }
  };

  expression$ = of(this.expression);
  constructor() { }

  updateExpression(expression: Expression) {
    this.expression = { ...expression };
  }

  updateOptions(options) {
    this.options = { ...options };
  }

  resetExpression() {
    Object.keys(this.options.controls).forEach(key => {
      if (!this.options.controls[key]) {
        this.expression[key].type = null;
        this.expression[key].params = {};
      }
    });
  }

  addYearChip(year) {
    if (!this.expression.years.params['on'])
      this.expression.years.params['on'] = [];

    this.expression.years.params['on'].push(year);
  }

  removeYearChip(year) {
    const index = this.expression.years.params['on'].indexOf(year);

    if (index >= 0) {
      this.expression.years.params['on'].splice(index, 1);
    }
  }


  clearParams(key: string) {
    this.expression[key].params = {};
  }
}
