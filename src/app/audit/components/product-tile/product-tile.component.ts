import { Component, OnInit, Input } from '@angular/core';
import { Product } from '@shared/models/product';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { UserApiService } from '@shared/services/api/user.api.service';

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.scss']
})
export class ProductTileComponent implements OnInit {
  faEllipsisV = faEllipsisV;

  @Input() product: Product;
  allUsers: any;
  firstUsers: [];
  userCount: number;

  colors = [
    '#3498db' ,
    '#1abc9c',
    '#e73c82',
  ];
  constructor(private userApiService: UserApiService) {

   }

  ngOnInit() {
    this.getusers();
    console.log(this.colors)
  }

  async getusers() {
    const data = await this.userApiService.getusersByProduct(this.product.id);
    this.allUsers = JSON.parse(data);
    this.firstUsers = this.allUsers.splice(0, 3);
    this.userCount = this.allUsers.length;
  }

}
