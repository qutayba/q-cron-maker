import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { getQuartz } from 'cron-to-quartz';


export enum SelectionType {
  All, Repeated, Specific, Range
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
  }
}

@Component({
  selector: 'q-cron-maker',
  templateUrl: './q-cron-maker.component.html',
  styleUrls: ['./q-cron-maker.component.scss']
})
export class QCronMakerComponent implements OnInit {

  SelectionType = SelectionType;


  options = {
    controls: {
      seconds: false,
      minutes: false,
      hours: true,
      days: true,
      months: true,
      years: true,
    }
  };

  seconds = [...Array(60).keys()];
  minutes = [...Array(60).keys()];
  hours = [...Array(24).keys()];


  expression = {
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
    }
  };

  constructor() {
    const test = getQuartz('* 12 * * *').toString();
    // const s = test.replaceAll(',', ' ');
  }

  ngOnInit(): void { }

  updateExpressionState() {
    Object.keys(this.options.controls).forEach(key => {
      if (!this.options.controls[key]) {
        this.expression[key].type = null;
        this.expression[key].params = {};
      }
    });
  }

  clearParams(key: string) {
    this.expression[key].params = {};
  }
}
