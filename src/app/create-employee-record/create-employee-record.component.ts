import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';


@Component({
  selector: 'app-create-employee-record',
  templateUrl: './create-employee-record.component.html',
  styleUrls: ['./create-employee-record.component.css']
})
export class CreateEmployeeRecordComponent implements OnInit {

  @Output('cancel') CancelClick = new EventEmitter<any>()

  constructor( private dataService : DataService) { }

  ngOnInit() {
  }

  onCancel() {
    this.CancelClick.emit();
  }

  onSubmit(formData : { name: string, salary: number, age: number}) {
    console.log('Inside on submit');
    this.dataService.createData(formData.name, formData.salary, formData.age)
    .subscribe( resp => {
      console.log(resp);
      this.CancelClick.emit();
    },
      error => {
        console.log(error);
        this.CancelClick.emit();
      })
  } 

}
