import { Component, Input, OnInit } from '@angular/core';
import { HouseService } from '../../services/house.service';
import { House } from '../../House';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.scss'],
})
export class HouseListComponent implements OnInit {
  houseDetails: any;
  houses: House[] = [];
  showAddHouse: boolean;
  showHouseDetails: boolean;
  subscription: Subscription;

  constructor(
    private houseService: HouseService,
    private uiService: UiService
  ) {
    this.subscription = this.uiService
      .onAddHouseToggle()
      .subscribe((v) => (this.showAddHouse = v));
    this.subscription = this.uiService
      .onShowDetailsToggle()
      .subscribe((v) => (this.showHouseDetails = v));
  }

  ngOnInit(): void {
    this.houseService.getHouses().subscribe((houses) => (this.houses = houses));
  }

  deleteHouse(house: House) {
    this.houseService
      .deleteHouse(house)
      .subscribe(
        () => (this.houses = this.houses.filter((h) => h.id !== house.id))
      );
  }

  getHouseDetails(house: House){
    this.houseDetails = house;
  }

  addHouseToggle() {
    this.uiService.toggleAddHouse();
  }

  addHouse(house: House) {
    this.houseService
      .addHouse(house)
      .subscribe((house) => this.houses.push(house));
  }
}
