import { evidenceRoute, questionRoute2 } from './../../constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evidence } from '@shared/models/evidence';

@Injectable({
  providedIn: 'root',
})
export class EvidenceApiService {
  constructor(private httpClient: HttpClient) {}

  public async get(id: number, qid: number): Promise<Evidence[]> {
    const result = await this.httpClient
      .get(evidenceRoute + '/' + id + '/questions/' + qid + '/evidence')
      .toPromise();
    return result as Evidence[];
  }

  public async post(id: number, data: Evidence) {
    const result = await this.httpClient
      .post(questionRoute2 + '/' + id + '/evidence', data)
      .toPromise();
    console.log(result);
  }
}
