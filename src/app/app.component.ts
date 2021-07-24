import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD';
  employees = [
    {name:"Shaifali", Description:"Programmer"},
    {name:"Alexa", Description:"Designer"},
    {name:"Maria", Description:"Manager"}
  ];
  model:any={};
  model2:any={};
  msg:any="";
  addEmployee(){
    this.employees.push(this.model);
    this.model = {};
    this.msg = "Record is successfully added..... "; 

  }
  deleteEmployee(i: number){
    this.employees.splice(i,1);
    this.msg = "Record is successfully deleted..... ";
    
  }
  myValue: any;
  editEmployee(k:  number){
    this.model2.name = this.employees[k].name;
    this.model2.Description= this.employees[k].Description;
    this.myValue = k;

  }
  updateEmployee(){
    let k= this.myValue;
    for(let i=0; i<this.employees.length;i++){
      if(i==k){
        this.employees[i]= this.model2;
        this.model2 = {};
        this.msg = "Record is successfully updated..... ";
      }

    }

  }
  clickMe(){
    this.msg = "";
  }
}
