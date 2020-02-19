import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//HttpClient is capable of performing get and post type restful calls
import { Observable } from 'rxjs/Rx';
import { _throw } from 'rxjs/observable/throw';
import { map, catchError } from 'rxjs/operators';
//rxjs is for async operations, such as the 'observable'  this classes's instructions are incorrect due to the version
//of angular being used.   The above imports needed to be modified to prevent compiling error.
import { ICustomer, IOrder } from '../../app/shared/interfaces';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class DataService {
// if you were going to be calling an actual rest api, you would simply change the baseUrl to the url of the api
    baseUrl: string = '/api/gsi-provisioning-service/api/seller/list';
//orig get url  http://lvsdevwsv04-01.us.gspt.net:3801  '/seller-cheat/gsi-provisioning-service/api/seller/list'
    constructor(private http: HttpClient) {

    }
//code manoj helped me with   'Authorization': 'Basic cm9tdWk6cm9tdWk=',
    /*let headers = new HttpHeaders(      {
          'Content-Type': 'application/json',
         
          'Access-Control-Allow-Origin': '*' ,
          'Access-Control-Allow-Headers': 'content-type',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS'
        });

    let options = { headers: headers };*/

    getCustomers() : Observable<ICustomer[]> {
      return this.http.get<ICustomer[]>(this.baseUrl)
        .pipe(
         catchError(this.handleError)
      )
    }

    getCustomer(id: number) : Observable<ICustomer> {
      return this.http.get<ICustomer[]>(this.baseUrl)
        .pipe(
          map(customers => {
            let customer = customers.filter((cust: ICustomer) => cust.id === id);
            return (customer && customer.length) ? customer[0] : null;
          }),
          catchError(this.handleError)
        )
    }

    getOrders(id: number) : Observable<IOrder[]> {
      return this.http.get<IOrder[]>(this.baseUrl)
        .pipe(
          map(orders => {
            let custOrders = orders.filter((order: IOrder) => order.customerId === id);
            return custOrders;
          }),
          catchError(this.handleError)
        );
    }


    private handleError(error: any) {
      console.error('server error:', error);
      if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return Observable.throw(errMessage);
          // Use the following instead if using lite-server
          // return Observable.throw(err.text() || 'backend server error');
      }
      return Observable.throw(error || 'Node.js server error');
    }

}
