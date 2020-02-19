import { Component, OnInit } from '@angular/core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { ProductApiService } from '@shared/services/api/product.api.service';
import { Product } from '@shared/models/product';
import { AuthService } from '@shared/services/auth/auth.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss']
})
export class ViewProductsComponent implements OnInit {

  faEllipsisV = faEllipsisV;
  isCollapsed = false;

  products: Product[];
  userId: string;

  constructor(private productApi: ProductApiService , private auth: AuthService) { }

  async ngOnInit() {
    const user = await this.auth.getCurrentUser();
    if ( user ) {
      this.userId = user.userId;
    }
    this.products = await this.productApi.get(this.userId);
  }
}
