import { Router } from '@angular/router';
import { IVehicle } from './../IVehicle';
import { VehicleService } from './../vehicle.service';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-vehicle-info',
  templateUrl: './vehicle-info.component.html',
  styleUrls: ['./vehicle-info.component.css']
})
export class VehicleInfoComponent implements OnInit {
  @Input() vehicle: IVehicle;
  @Output() reserveVehicleClicked = new EventEmitter();
  isAdmin  = false;
  reservedId: number;

  constructor(private vehicleService: VehicleService) {
    this.vehicle = {
      name: 'Ferrari',
      vehicleNumber: 'abc1232',
      branch: 'Pune',
      vehicleType: '4-wheeler',
      insuranceExpiryDate: new Date(),
      lastServiceDate: new Date(),
      serviceDueDate: new Date(),
      // tslint:disable-next-line: max-line-length
      image: 'https://images.unsplash.com/photo-1514867644123-6385d58d3cd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'}
   }

  ngOnInit() {
    this.isAdmin = this.vehicleService.isAdmin;
  }

}
