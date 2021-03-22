import { EventEmitter, Input } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit-employee-record',
  templateUrl: './edit-employee-record.component.html',
  styleUrls: ['./edit-employee-record.component.css']
})
export class EditEmployeeRecordComponent implements OnInit {

  @Output('cancel') CancelClick = new EventEmitter<any>();
  @Input() employeeRecord : { name: string, salary: number, age: number, id: number};
  
  constructor( private dataService : DataService) { }

  ngOnInit() {
  }

  onCancel() {
    this.CancelClick.emit();
  }

  onSubmit() {
    this.dataService.edit( this.employeeRecord).subscribe( response => {
      console.log(response);
    },
    error => {
      console.log(error.message);
      this.onCancel();
    });
  }

}
