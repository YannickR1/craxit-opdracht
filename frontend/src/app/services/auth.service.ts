import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  login(data):Observable<any>{
    return this.http.post(`${userUrl}/login`, data)
  }

  register(data):Observable<any> {
    return this.http.post(`${userUrl}/register`, data)
  }

}
