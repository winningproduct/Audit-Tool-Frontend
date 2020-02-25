import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { KnowledgeArea } from '../../models/knowledge-area';
import { productPhaseRoute, knowledgeAreaRoute } from '../../constants';

@Injectable({
  providedIn: 'root',
})
export class KnowledgeAreaApiService {
  constructor(private httpClient: HttpClient) {}

  public async get(id: number): Promise<KnowledgeArea[]> {
    const result = await this.httpClient
      .get(productPhaseRoute + '/' + id + '/knowledgeAreas')
      .toPromise();
    return JSON.parse(result['body']) as KnowledgeArea[];
  }

  public async getById(id: number): Promise<KnowledgeArea[]> {
    const result = await this.httpClient
      .get(knowledgeAreaRoute + '/' + id)
      .toPromise();
    return JSON.parse(result['body']) as KnowledgeArea[];
  }
}
