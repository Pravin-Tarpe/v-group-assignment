import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Employee } from "../Model/employee.model";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  employees: Employee[] = [];
  employeeData: { name: string; salary: number; age: number; id: number };
  loaded: boolean = false;  // to show dashboard only after records are successfully fetched
  isCreated: boolean = false;
  isEdited: boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    //to fetch employee records on login
    this.onFetch();
  }

  onFetch() {
    this.dataService.fetchData().subscribe((response) => {
      console.log(response);
      this.employees = response;
      this.loaded = true;
    },
    error => {
      console.log(error.message);
      this.onFetch(); // api is unreliable, need to make several requests to get data
    })
  }

  onEdit(data: Employee) {
    this.employeeData = {
      name: data.employee_name,
      salary: data.employee_salary,
      age: data.employee_age,
      id: data.id,
    };
    this.isEdited = true; // to show modal to edit employee record
  }

  onCreate() {
    this.isCreated = true; // to show modal to create new employee record
  }

  onCancelClicked() {
    //to remove the modal
    this.isCreated = false;
    this.isEdited = false;
  }

  onDelete(id: number) {
    this.dataService.delete(id).subscribe((resp) => {
      console.log(resp);
      this.loaded = false;
      this.onFetch();
    });
  }
}
