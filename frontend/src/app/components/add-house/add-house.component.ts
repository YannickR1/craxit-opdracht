import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { House } from '../../House'

@Component({
  selector: 'app-add-house',
  templateUrl: './add-house.component.html',
  styleUrls: ['./add-house.component.scss']
})
export class AddHouseComponent implements OnInit {
  @Output() onAddHouse: EventEmitter<House> = new EventEmitter()

  name: string;
  city: string;
  rooms: number;
  price: number;
  image: string;

  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit(){
    if(!this.name){
      alert('Please add a name for the house')
      return
    }
    if(!this.city){
      alert('Please add a location for the house')
      return
    }
    if(!this.rooms){
      alert('Please add the amount of rooms of the house')
      return
    }
    if(!this.price){
      alert('Please add a price for the house')
      return
    }

    const newHouse = {
      name: this.name,
      city: this.city,
      rooms: this.rooms,
      price: this.price,
      image: this.image
    };

    this.onAddHouse.emit(newHouse);

    this.name = "",
    this.city = "",
    this.rooms = 0,
    this.price = 0,
    this.image = ""
  }

}
