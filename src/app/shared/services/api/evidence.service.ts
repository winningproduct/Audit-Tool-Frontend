import { evidenceBaseRoute } from './../../constants';
import { evidenceRoute, questionRoute2 } from './../../constants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    return JSON.parse(result['body']) as Evidence[];
  }

  async updateStatus(id: number, status: any, eid: number): Promise<boolean> {
    const state = {status};
    const url = evidenceBaseRoute + '/' + id + '/evidence/' + eid;
    const result = await this.httpClient.put(url, state).toPromise();
    return JSON.parse(result['body']) as boolean;
  }

  async post(id: number, data: Evidence): Promise<boolean> {
    const result = await this.httpClient
      .post(questionRoute2 + '/' + id + '/evidence', data)
      .toPromise();
    return JSON.parse(result['body']) as boolean;
  }

  public async getEvidenceVersions(productId: number, questionId: number): Promise<Evidence[]> {
    const result = await this.httpClient
      .get(evidenceRoute + '/' + productId + '/question/' + questionId )
      .toPromise();
    return JSON.parse(result['body']);
  }

  public async getEvidenceVersionsByDate(productId: number, questionId: number, date: string): Promise<Evidence[]> {
    const result = await this.httpClient
      .get(evidenceRoute + '/' + productId + '/question/' + questionId + '/evidence/date/' + date )
      .toPromise();
    return JSON.parse(result['body']);
  }

  async getEvidenceById(evidenceId: number): Promise<Evidence[]> {
    const result = await this.httpClient
      .get('evidence/' + evidenceId)
      .toPromise();
    return JSON.parse(result['body']);
  }
}
