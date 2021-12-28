import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-house',
  templateUrl: './add-house.component.html',
  styleUrls: ['./add-house.component.scss']
})
export class AddHouseComponent implements OnInit {
  name: string;
  location: string;
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
    if(!this.location){
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
      location: this.location,
      rooms: this.rooms,
      price: this.price,
      image: this.image
    }



  }

}
