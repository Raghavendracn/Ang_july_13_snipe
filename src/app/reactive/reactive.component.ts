import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {
 empForm = new FormGroup({
  firstName: new FormControl(),
  lastName: new FormControl(),
  email: new FormControl(),
  gender: new FormControl(),
  isMarried: new FormControl(),

  
  
 })
 onSubmit(){
  console.log(this.empForm.value)
 }
}
