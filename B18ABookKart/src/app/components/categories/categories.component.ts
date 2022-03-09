import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  
  public bookList:any=[];
   public filterCategory:any=[];
   public priceFilter:any=[];
   public value: number = 1;
    noPrice: boolean=false;
  //  public rate = new BehaviorSubject<any>([""]);
  price: any;
  public categoryName:any;
  public rate:any;
  

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.categoryName='';
    this.rate=56000;
    this.api.getList()
    .subscribe(res=>{
      this.bookList = res;
      this.filterCategory = res;
      this.priceFilter=res;
    })
  }
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  
  filter(category:string){
    this.categoryName=category;
 this.filterCategory=this.bookList.filter((a:any)=>{
   if(a.category==category || category==""){
     if(a.price<=this.rate){
     return a
     } 
   }
 })
 this.api.filter.next(this.bookList);
  }
  filter1(){
    this.filter(this.categoryName)

    
  }
  
  }
  
  
  
