import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  login(data):Observable<any>{
    return this.http.post(`${baseUrl}/User/login`, data)
  }

  register(data):Observable<any> {
    return this.http.post(`${baseUrl}/User/register`, data)
  }

}
