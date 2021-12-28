import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  isLoggedIn = true;

  staticHouseList = [
    {id: 1, name: "My house", city: "Mortsel", rooms: 12, price: 650583.99, image: null},
    {id: 1, name: "Penthouse A", city: "Antwerp", rooms: 8, price: 954683.59, image: null},
    {id: 1, name: "Studio G", city: "Gent", rooms: 2, price: 180000, image: null},
    {id: 1, name: "Flat 1", city: "Mechelen", rooms: 6, price: 350214.55, image: null},
    {id: 1, name: "Duplex 33", city: "Antwerp", rooms: 8, price: 380999, image: null},
    {id: 1, name: "Appartement 2", city: "Leuven", rooms: 2, price: 225000, image: null},
    {id: 1, name: "Summer house", city: "Durbuy", rooms: 12, price: 367000, image: null}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
