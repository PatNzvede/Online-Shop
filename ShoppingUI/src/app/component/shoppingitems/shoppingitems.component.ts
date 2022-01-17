import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/app/services/api.service' ;
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shoppingitems',
  templateUrl: './shoppingitems.component.html',
  styleUrls: ['./shoppingitems.component.scss']
})
export class ShoppingitemsComponent implements OnInit {
  productList : any
  page : number =1;
  pageLength :number =10;
  orderSize : number =20;
  count = 0;
  pageSize = 9;
  pageSizes = [9,  18, 36];
  title = '';
   constructor(private api :ApiService, private cartService :CartService) { }
 
   ngOnInit(): void {
    this.api.getProducts().subscribe(res =>{
      this.productList = res;
      console.log(res);
      this.productList.forEach((a:any)=>{
        Object.assign(a,{ total :a.price});
      })
     })
  }

  // displayProducts(): void{
    //const params = this.getRequestParams(this.title, this.page, this.pageSize);
    // this.api.getProducts(params).subscribe({next : (data) =>{
      // this.productList = res;
      // const{productList, totalItems} = data;
     //  this.count = totalItems;
      // this.productList=  productList;
      //this.productList.forEach((a:any)=>{
      //  Object.assign(a,{ total :a.price});
      // })
    // console.log(this.count);
    // console.log(productList);
     //console.log("Tested");
     //console.log(data);
      //  },
        //error: (err) => {
         // console.log(err);
       // }
     // });
//   }
   
  getRequestParams(searchTitle: string, page: number, pageSize: number): any {
    let params: any = {};

    if (searchTitle) {
      params[`title`] = searchTitle;
    }

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }
     addtocart(item : any) {
     this.cartService.addtoCart(item);
     console.log(item);
      }
   
 }
 