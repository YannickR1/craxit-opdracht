import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {House} from '../../House'

@Component({
  selector: 'app-house-list-item',
  templateUrl: './house-list-item.component.html',
  styleUrls: ['./house-list-item.component.scss']
})
export class HouseListItemComponent implements OnInit {
  @Input() house: House;
  @Output() onDeleteHouse: EventEmitter<House> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(house){
    this.onDeleteHouse.emit(house)
  }
}
