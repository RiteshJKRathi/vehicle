import { VehicleService } from './../vehicle.service';
import { Component, OnInit } from '@angular/core';
import { IVehicle } from '../IVehicle';


@Component({
  selector: 'app-model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.css']
})
export class ModelListComponent implements OnInit {
  vehicleList: IVehicle[];
  vehicleService: VehicleService;

  constructor() {
    this.vehicleService = new VehicleService();
  }

  ngOnInit() {
    this.vehicleList = this.vehicleService.getVehicle();
  }

}
