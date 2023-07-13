import { Component,Input,Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  // @Input()  childMessage: string | any;
  @Output() buttonWasClicked = new EventEmitter<void>();
   @Input() childMessage: string |any ;
  onButtonClick() {
    this.buttonWasClicked.emit();
}
  constructor(){}
  ngOnInit(): void {
   
  }
}
