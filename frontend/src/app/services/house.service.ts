import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import {House} from '../House';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  private apiUrl = "https://localhost:7257/api" 


  constructor(private http:HttpClient) { }

  getHouses(): Observable<House[]> {
    return this.http.get<House[]>(this.apiUrl + '/Houses');
  }

  deleteHouse(house: House): Observable<House>{
    const url = `${this.apiUrl}/houses/${house.id}`
    
    return this.http.delete<House>(url)
  }

  addHouse(house: House):Observable<House> {
    window.location.reload()
    return this.http.post<House>(this.apiUrl + '/Houses', house, httpOptions);
    
  }
}
