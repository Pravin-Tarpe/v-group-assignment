import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeeRecordComponent } from './create-employee-record.component';

describe('CreateEmployeeRecordComponent', () => {
  let component: CreateEmployeeRecordComponent;
  let fixture: ComponentFixture<CreateEmployeeRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEmployeeRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployeeRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
