import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public filter = new BehaviorSubject<any>([""]);
  public price = new BehaviorSubject<any>([""]);
  public rate = new BehaviorSubject<any>([""]);
  constructor(private http : HttpClient) { }

  getList(){
    return this.http.get<any>("https://bookcart.azurewebsites.net/api/Book")
    .pipe(map((res:any)=>{
      return res;
    }
    ))
  }
}
