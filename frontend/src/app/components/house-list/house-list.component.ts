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

  deleteHouse(house: House){
    this.houseService
      .deleteHouse(house)
      .subscribe(
        () => (this.houses = this.houses.filter((h) => h.id !== house.id))
        );
  }

  addHouseToggle(){
    console.log('toggle')
  }

  addHouse(house: House){
    this.houseService.addHouse(house).subscribe((house) => this.houses.push(house));
  }

}
