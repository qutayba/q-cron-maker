import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QCronMakerComponent } from './q-cron-maker.component';

describe('QCronMakerComponent', () => {
  let component: QCronMakerComponent;
  let fixture: ComponentFixture<QCronMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QCronMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QCronMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
