import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  protected housingLocationList: HousingLocation[] = [
    {
      "id": 0,
      "name": "Test Home",
      "city": "Test city",
      "state": "ST",
      "photo": 'assets/images/casa1.jpg',
      "availableUnits": 2,
      "wifi": true,
      "laundry": false
  },
  {
    "id": 1,
    "name": "Test Home 2",
    "city": "Test city 2",
    "state": "ST",
    "photo": 'assets/images/casa2.jpg',
    "availableUnits": 3,
    "wifi": true,
    "laundry": false
  },
  {

    "id": 2,
    "name": "Test Home 3",
    "city": "Test city 3",
    "state": "ST",
    "photo": 'assets/images/casa3.jpg',
    "availableUnits": 4,
    "wifi": true,
    "laundry": false
  }
  ];

  constructor() { }

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find((location) => location.id === id);
  }

  submitApplication(firstName: String, lastName: String, email: String){
    console.log("Application submitted", firstName, lastName, email);
  }
}
