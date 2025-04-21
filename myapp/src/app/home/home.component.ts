import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="filtra por ciudad" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Buscar</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location *ngFor="let housingLocation of filterLocationList" [housingLocation]="housingLocation"></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filterLocationList: HousingLocation[] = [];

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[])=>{
      this.housingLocationList = housingLocationList;
      this.filterLocationList = housingLocationList;
    });
  }

  filterResults(text: String){
    console.log('Filter text:', text); // Verifica el valor del texto ingresado
    if(!text) this.filterLocationList = this.housingLocationList;

    this.filterLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
