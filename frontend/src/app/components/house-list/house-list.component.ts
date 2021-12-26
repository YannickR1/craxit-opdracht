import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.scss']
})
export class HouseListComponent implements OnInit {
  private apiUrl = 'https://localhost:7086/api/Houses'
  houseList = [];
  constructor (
    private httpClient: HttpClient

  ) {}

  staticHouseList = [
    { id: 1, name: 'my House', city: 'Mortsel', rooms: 3 },
    { id: 2, name: 'Penthouse', city: 'Antwerpen', rooms: 2 },
    { id: 3, name: 'Studio', city: 'Gent', rooms: 1 },
    { id: 4, name: 'Appartment A', city: 'Mechelen', rooms: 2 },
    { id: 5, name: 'House', city: 'Leuven', rooms: 4 },
    { id: 6, name: 'Small house', city: 'Antwerpen', rooms: 3 },
    { id: 7, name: 'Big House', city: 'Mechelen', rooms: 5 },
    { id: 8, name: 'Duplex', city: 'Mortsel', rooms: 3 },
  ];

  ngOnInit(): void {
  }

  getHouses() {
    this.httpClient.get<any>(this.apiUrl).subscribe(
      response => {
        this.houseList = response;
        console.log(this.houseList)
      }
    )
  }

}
