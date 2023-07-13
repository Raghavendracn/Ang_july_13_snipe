import { Component,OnInit } from '@angular/core';
import { HelloService } from '../hello.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Data:any=[];
  constructor(private hello:HelloService){
  }
mesValue="";
ngOnInit(){
this.mesValue = this.hello.onData()
this.loadEmployees();

}

loadEmployees() {
  return this.hello.GetData().subscribe((data) => {
    this.Data= data;
    console.log(this.Data);
  })
}
}
