import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { House } from '../../House';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-house-list-item',
  templateUrl: './house-list-item.component.html',
  styleUrls: ['./house-list-item.component.scss'],
})
export class HouseListItemComponent implements OnInit {
  @Input() house: House;
  @Output() onDeleteHouse: EventEmitter<House> = new EventEmitter();
  @Output() onSendHouseDetails: EventEmitter<House> = new EventEmitter();
  showHouseDetails: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onShowDetailsToggle()
      .subscribe((v) => (this.showHouseDetails = v));
  }

  ngOnInit(): void {
    
  }

  onDelete(house) {
    this.onDeleteHouse.emit(house);
  }

  sendHouseDetails(house) {
    
    this.onSendHouseDetails.emit(house);
    console.log('sent house: ' + house.id)
    
  }

  showHouseToggle(house) {
    this.sendHouseDetails(house);
    this.uiService.toggleShowDetails();
  }
}
