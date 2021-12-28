import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import {House} from '../House';
import {HOUSES} from '../mock-houses';


@Injectable({
  providedIn: 'root'
})
export class HouseService {
  // private apiUrl = "https://localhost:7257/api/Houses"

  constructor() { }

  getHouses(): Observable<House[]> {
    const houses = of(HOUSES);
    return houses

    // return this.http.get<House[]>(this.apiUrl)
  }
}
