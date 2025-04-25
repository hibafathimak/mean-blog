import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  serverUrl:string='http://localhost:3000'
  constructor(private http: HttpClient) { }
  loginApi(reqbody:any) {
    return this.http.post(`${this.serverUrl}/login`,reqbody)
  }
}
