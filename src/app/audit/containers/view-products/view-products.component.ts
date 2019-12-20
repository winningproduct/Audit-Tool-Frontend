import { Component, OnInit } from '@angular/core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { ProductApiService } from 'src/app/shared/services/api/product.api.service';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss']
})
export class ViewProductsComponent implements OnInit {
  faEllipsisV = faEllipsisV;

  products: Product[];

  constructor(private productApi: ProductApiService) { }

  async ngOnInit() {
    this.products = await this.productApi.get();
  }
}
