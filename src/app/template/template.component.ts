import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  onSubmit(contactForm:any) {
    console.log(contactForm.value);
  }
}

