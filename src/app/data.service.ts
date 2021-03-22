import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './Model/employee.model';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http : HttpClient) { }

  fetchData() {
    return this.http.get<{status: string, data: [], message: string}>('http://dummy.restapiexample.com/api/v1/employees')
    .pipe(
      map( resp => {
        const employees = resp.data;
        return employees;
      })
    )
  }

  createData(name: string, salary: number, age: number) {
    return this.http.post('http://dummy.restapiexample.com/api/v1/create', 
    {"name": name, "salary": salary, "age" : age})
  }

  delete( id : number) {
    return this.http.delete('http://dummy.restapiexample.com/api/v1/delete/' + id)
  }

  edit( data : { name: string, salary: number, age: number, id : number}) {
    
    return this.http.put('http://dummy.restapiexample.com/api/v1/update/' + data.id, 
    { name: data.name, salary : data.salary, age: data.age});
  }

}
