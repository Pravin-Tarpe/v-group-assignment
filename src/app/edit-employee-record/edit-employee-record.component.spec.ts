import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployeeRecordComponent } from './edit-employee-record.component';

describe('EditEmployeeRecordComponent', () => {
  let component: EditEmployeeRecordComponent;
  let fixture: ComponentFixture<EditEmployeeRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEmployeeRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmployeeRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
