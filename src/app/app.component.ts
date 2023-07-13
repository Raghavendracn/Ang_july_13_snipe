import {Component} from '@angular/core'
import { HelloService } from './hello.service';


@Component({
    selector:"app-root",
   templateUrl:"./app.component.html",
    styleUrls:[]

})

export class AppComponent{
    constructor( private hello:HelloService){}
   eName = true;
    name = "Raghav";
    source = "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg";
    parentMessage = "message from parent";
    sample(){
        this.hello.onDisplay("Hello World")
    }
   

    message: string = ""

buttonInChildComponentWasClicked() {
    this.message = 'The button in the child component was clicked';
}


}