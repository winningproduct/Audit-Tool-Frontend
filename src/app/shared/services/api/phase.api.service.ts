import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Phase } from '../../models/phase';
import { phaseRoute } from '../../constants';


@Injectable({
    providedIn: 'root',
})
export class PhaseApiService {
    constructor(private httpClient: HttpClient) { }

    public async get(id: number): Promise<Phase[]> {
        const result = await this.httpClient.get(phaseRoute + '/' + id + '/phases').toPromise();
        return result as Phase[];
    }
}
