import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../shared/interfaces';
import { DataService } from '../core/data.service';

@Component ({
    selector: 'app-customers',
    templateUrl: './customers.component.html'
})

export class CustomersComponent implements OnInit {
  title: string;
  people: any[];
  /** function and boolean to illustrate property and event binding.
    isVisable = true;

  changeVisability() {
    this.isVisable = !this.isVisable;
  }**/

  constructor(private dataService: DataService) {}

  ngOnInit(){
    this.title = 'Seller Details';
    //below returns an cold observable, which is basically dormant data that you need to explicitly tell to turn on
    this.dataService.getCustomers()
      .subscribe((customers: ICustomer[]) => this.people = customers);
    /*removing original hardcode of data, and now implementing the dataservice.
      this.people = [
            { id: 1, name: 'john Doe', city: 'Phoenix', orderTotal: 9.99, customerSince: new Date(2014, 7, 10) },
            { id: 2, name: 'jane Doe', city: 'Chandler', orderTotal: 19.99, customerSince: new Date(2017, 2, 22)},
            { id: 3, name: 'michelle Thomas', city: 'Seattle', orderTotal: 99.99, customerSince: new Date(2002, 10, 31)},
            { id: 4, name: 'jim Thomas', city: 'New York', orderTotal: 599.99, customerSince: new Date(2002, 10, 31)},
          ];*/
  }
}
