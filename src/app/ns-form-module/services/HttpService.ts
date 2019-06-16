import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient, private baseUrl: string) { }

    public get(url: string, params?: { [key: string]: any }): Promise<Object> {
        var fullUrl: string;
        if (url.indexOf('/') == 0) {
            fullUrl = this.baseUrl + url;
        } else {
            fullUrl = this.get + '/' + url;
        }
        return this.http.get(fullUrl, { params: params }).toPromise();
    }
}