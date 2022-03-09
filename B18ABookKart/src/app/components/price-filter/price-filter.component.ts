import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-price-filter',
  templateUrl: './price-filter.component.html',
  styleUrls: ['./price-filter.component.scss']
})
export class PriceFilterComponent implements OnInit {

  public filterCategory:any=[];
  public bookList:any=[];
  public rate:any;
  constructor(private api: ApiService) { }  

  ngOnInit(): void {
    this.getList();
  }
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  getList(){
    this.api.getList().subscribe((res=>{
      this.filterCategory=res 
      this.bookList=res     
    }))
  }

  filter() {
    this.filterCategory= this.bookList
    .filter((a:any)=>{
      debugger;
      if(a.price<=this.rate){
        return a
        debugger;
      }
    })
    this.api.price.next(this.filterCategory);
    debugger;
  }

}
