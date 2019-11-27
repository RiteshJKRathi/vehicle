import { VehicleService } from './../vehicle.service';
import { IVehicle } from './../IVehicle';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-search',
  templateUrl: './vehicle-search.component.html',
  styleUrls: ['./vehicle-search.component.css']
})
export class VehicleSearchComponent implements OnInit {

  vList: IVehicle[];
  vehicleService: VehicleService;
  constructor() {
    this.vehicleService = new VehicleService();
   }

  ngOnInit() {
    this.vList = this.vehicleService.getVehicle();
  }

  onClick(value: string){
    this.vList = null;
    this.vList = this.vehicleService.searchVehicle(value);

  }

  onInput(value: string){
    this.vList = null;
    this.vList = this.vehicleService.searchVehicle(value);
  }

}
