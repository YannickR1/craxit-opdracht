import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import {House} from '../House';
import { baseUrl } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  bearer = localStorage.getItem('token') 

  constructor(private http:HttpClient) { }

  getHouses(): Observable<House[]> {
    return this.http.get<House[]>(`${baseUrl}/Houses`, {headers: {  'Content-type': 'application/json' , 'Authorization' : `Bearer ${this.bearer}`}})
  }

  deleteHouse(house: House): Observable<House>{
    const url = `${baseUrl}/Houses/${house.id}`
    
    return this.http.delete<House>(url)
  }

  addHouse(house: House):Observable<House> {
    window.location.reload()
    return this.http.post<House>(`${baseUrl}/Houses`, house, {headers: {  'Content-type': 'application/json' , 'Authorization' : `Bearer ${this.bearer}`}});
  }

  editHouse(house: House):Observable<House>{
    window.location.reload()
    const url = `${baseUrl}/houses/`;
    
    return this.http.put<House>(url, house, {headers: {  'Content-type': 'application/json' , 'Authorization' : `Bearer ${this.bearer}`}});
  }
}
