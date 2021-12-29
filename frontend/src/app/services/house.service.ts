import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import {House} from '../House';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
    'Authorization': ''
  })
}

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  private apiUrl = "https://localhost:7257/api" 


  constructor(private http:HttpClient) { }

  getHouses(): Observable<House[]> {
    return this.http.get<House[]>(this.apiUrl + '/Houses',httpOptions);
  }

  deleteHouse(house: House): Observable<House>{
    const url = `${this.apiUrl}/houses/${house.id}`
    
    return this.http.delete<House>(url)
  }

  addHouse(house: House):Observable<House> {
    window.location.reload()
    return this.http.post<House>(this.apiUrl + '/Houses', house, httpOptions);
  }

  editHouse(house: House):Observable<House>{
    window.location.reload()
    const url = `${this.apiUrl}/houses/`;
    
    return this.http.put<House>(url, house, httpOptions);
  }
}
