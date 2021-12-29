import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { House } from '../../../app/House';

@Component({
  selector: 'app-edit-house',
  templateUrl: './edit-house.component.html',
  styleUrls: ['./edit-house.component.scss']
})
export class EditHouseComponent implements OnInit {
  @Output() onEditHouse: EventEmitter<House> = new EventEmitter()
  @Input() houseDetails: House;

  name: string;
  city: string;
  rooms: number;
  price: number;
  image: string;

  constructor() { 
   }

  ngOnInit(): void {
  }
  
  onSubmit(){
    if(!this.name){
      this.name = this.houseDetails.name
    }
    if(!this.city){
      this.city = this.houseDetails.city
    }
    if(!this.rooms){
      this.rooms = this.houseDetails.rooms
    }
    if(!this.price){
      this.price = this.houseDetails.price
    }

    const updatedHouse = {
      id: this.houseDetails.id,
      name: this.name,
      city: this.city,
      rooms: this.rooms,
      price: this.price,
      image: this.image
    };

    console.log(updatedHouse)
    this.onEditHouse.emit(updatedHouse);
  }

}
