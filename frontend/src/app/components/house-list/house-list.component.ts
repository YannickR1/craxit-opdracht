import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.scss']
})
export class HouseListComponent implements OnInit {
  @Input() staticHouseList?: [];

  constructor() { }

  ngOnInit(): void {
  }

}
