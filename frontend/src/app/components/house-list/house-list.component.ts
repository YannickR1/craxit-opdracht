import { Component, Input, OnInit } from '@angular/core';
import {House} from '../../House'
import {HOUSES} from '../../mock-houses'

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.scss']
})
export class HouseListComponent implements OnInit {
  houses: House[] = HOUSES;

  constructor() { }

  ngOnInit(): void {
  }

}
