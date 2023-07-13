import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HelloService {
  baseurl="https://dummyjson.com/products"
  constructor(private http:HttpClient) { 

  }
 message = "";
  onDisplay(data:any){
   this.message = data;
  }
  onData(){
  return this.message;
  }

  GetData(): Observable<object> {
    return this.http.get(this.baseurl)
      
  }
  SendData(data:object): Observable<object> {
    return this.http.get(this.baseurl + data)
      
  }
}
