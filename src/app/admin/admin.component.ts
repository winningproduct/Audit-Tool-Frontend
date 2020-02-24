import { Component, OnInit } from '@angular/core';
import { UserApiService } from '@shared/services/api/user.api.service';
import { ProductApiService } from '@shared/services/api/product.api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private userService: UserApiService , private productService: ProductApiService) { }

  ngOnInit() {
  }

  getAllUsers() {
    this.userService.getAllUsers();
  }

  getAllProjects() {
    this.productService.getAllProducts();
  }

  addUserToProject() {
    this.productService.addUser();
  }

  createProduct() {
    this.productService.create();
  }
}
