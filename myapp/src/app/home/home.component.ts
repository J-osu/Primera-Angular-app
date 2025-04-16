import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="tex" placeholder="filtra por ciudad">
        <button class="primary" type="button">Buscar</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location *ngFor="let housingLocation of housingLocationList" [housingLocation]="housingLocation"></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  baseUrl: string = 'assets/images'; // Cambia esta ruta a la ubicación de tus fotos
  housingLocationList: HousingLocation[] = [
    {
      "id": 0,
      "name": "Test Home",
      "city": "Test city",
      "state": "ST",
      "photo": `${this.baseUrl}/casa1.jpg`,
      "availableUnits": 2,
      "wifi": true,
      "laundry": false
  },
  {
    "id": 1,
    "name": "Test Home 2",
    "city": "Test city 2",
    "state": "ST",
    "photo": `${this.baseUrl}/casa1.jpg`,
    "availableUnits": 3,
    "wifi": true,
    "laundry": false
  },
  {

    "id": 2,
    "name": "Test Home 3",
    "city": "Test city 3",
    "state": "ST",
    "photo": `${this.baseUrl}/casa1.jpg`,
    "availableUnits": 4,
    "wifi": true,
    "laundry": false
  }
  ];
}
