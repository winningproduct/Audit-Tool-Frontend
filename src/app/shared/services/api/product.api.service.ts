import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product';
import { linkProducts } from '../../constants';


@Injectable({
    providedIn: 'root',
})
export class ProductApiService {
    constructor(private httpClient: HttpClient) { }

    public async get(): Promise<Product[]> {
        const result = await this.httpClient.get(linkProducts).toPromise();
        return result as Product[];
    }
}
