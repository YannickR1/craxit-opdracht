import { Component, Input, OnInit } from '@angular/core';
import {House} from '../../House'

@Component({
  selector: 'app-house-list-item',
  templateUrl: './house-list-item.component.html',
  styleUrls: ['./house-list-item.component.scss']
})
export class HouseListItemComponent implements OnInit {
  @Input() house!: House;

  constructor() { }

  ngOnInit(): void {
    console.log(this.house)
  }

}
