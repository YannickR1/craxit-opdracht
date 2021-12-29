import { Component, OnInit, Input } from '@angular/core';
import { House } from 'src/app/House';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { HouseService } from '../../services/house.service';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.scss'],
})
export class HouseDetailsComponent implements OnInit {
  houses: House[] = [];
  @Input() houseDetails: House;
  subscription: Subscription;
  showEditHouse: boolean;

  constructor(
    private uiService: UiService,
    private houseService: HouseService
  ) {
    this.subscription = this.uiService
      .onEditHouseToggle()
      .subscribe((v) => (this.showEditHouse = v));
  }

  ngOnInit(): void {}

  showHouseToggle() {
    this.uiService.toggleShowDetails();
  }

  editHouseToggle() {
    this.uiService.toggleEditHouse();
  }

  editHouse(house: House) {
    this.houseService
      .editHouse(house)
      .subscribe((house) => this.houses.push(house));
  }
}
