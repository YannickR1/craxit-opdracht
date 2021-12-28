import { Component, Input, OnInit } from '@angular/core';
import { HouseService } from '../../services/house.service';
import {House} from '../../House'

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.scss']
})
export class HouseListComponent implements OnInit {
  houses: House[] = [];

  constructor(private houseService: HouseService) { }

  ngOnInit(): void {
    this.houseService.getHouses().subscribe((houses) => this.houses = houses);
  }

}
