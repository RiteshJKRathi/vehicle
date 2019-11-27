import { IVehicle } from './IVehicle';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  baseUrl = environment.baseUrl;
  private subject = new Subject<IVehicle[]>();
  isAdmin = false;
  addedToReserved = false;
  reservedId: number;
  vehicleList: IVehicle[];
  isLoggedIn = false;
  clickedOnReserve = false;

  constructor() {
    this.vehicleList = [{
      name: 'Ferrari',
      vehicleNumber: 'abc123',
      branch: 'Pune',
      vehicleType: '2-wheeler',
      insuranceExpiryDate: new Date(),
      lastServiceDate: new Date(),
      serviceDueDate: new Date(),
      // tslint:disable-next-line: max-line-length
      image: 'https://images.unsplash.com/photo-1514867644123-6385d58d3cd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
    },
    {
      name: 'Lamborghini',
      vehicleNumber: 'MH13DH7461',
      branch: 'Pune',
      vehicleType: '4-wheeler',
      insuranceExpiryDate: new Date(),
      lastServiceDate: new Date(),
      serviceDueDate: new Date(),
      // tslint:disable-next-line: max-line-length
      image: 'https://images.unsplash.com/flagged/photo-1551614727-932689a16f71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=693&q=80'},
    {
      name: 'Mustang GT',
      vehicleNumber: 'MH12AB11234',
      branch: 'Mumbai',
      vehicleType: '4-wheeler',
      insuranceExpiryDate: new Date(),
      lastServiceDate: new Date(),
      serviceDueDate: new Date(),
      // tslint:disable-next-line: max-line-length
      image: 'https://images.unsplash.com/photo-1547744152-14d985cb937f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'}];
   }

   getVehicle(){
     return this.vehicleList;
   }

   searchVehicle(value: string){
    // tslint:disable-next-line: prefer-const
    let vehicleSearch: IVehicle[] = [];
    this.vehicleList.forEach(vehicle => {
      if (vehicle.name.toLowerCase().includes(value.toLowerCase()))
      {
        vehicleSearch.push(vehicle);
      }
    });
    return vehicleSearch;
  }
}
