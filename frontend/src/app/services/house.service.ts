import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import {House} from '../House';
import {HOUSES} from '../mock-houses';


@Injectable({
  providedIn: 'root'
})
export class HouseService {
  // private apiUrl = "https://localhost:7257/api/Houses" .net backend not working yet
  private apiUrl = "http://localhost:5000" //mock backend

  constructor(private http:HttpClient) { }

  getHouses(): Observable<House[]> {
    return this.http.get<House[]>(this.apiUrl + '/houses');
  }

  deleteHouse(house: House): Observable<House>{
    const url = `${this.apiUrl}/houses/${house.id}`
    
    return this.http.delete<House>(url)
  }
}
