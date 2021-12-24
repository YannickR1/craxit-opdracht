import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.scss']
})
export class HouseListComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

}
