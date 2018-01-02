import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LaraService} from "../service/laravel/lara.service";
import {ProductsModel} from "../service/laravel/products.model";
import {OrderModel} from "../service/laravel/order.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {
  id: number;
  private sub: any;
  products: ProductsModel;
  private orders: OrderModel[] = [];
  item: OrderModel;


  constructor(private route: ActivatedRoute, private lara: LaraService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.lara.getProducts().subscribe((response : ProductsModel) => {
      this.products = response;
    });
    // let item1 = new OrderModel("hello", 10);
    // let item2 = new OrderModel("world", 12);
  //   this.item.desc = "hello";
  //   this.item.total = 11;
  //   this.orders.push(this.item);
  //   this.item.desc = "world";
  //   this.item.total = 44;
  //   this.orders.push(this.item);
  }

  onProductClick() {
    this.lara.postOrder(this.orders).subscribe((response: Response) => {
      console.log(response);
    })
  }

}
