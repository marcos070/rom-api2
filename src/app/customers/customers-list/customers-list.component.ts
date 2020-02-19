import { Component, OnInit, Input } from '@angular/core';
import { ICustomer } from '../../shared/interfaces';
import { SorterService } from '../../core/sorter.service';

@Component ({
    selector: 'app-customers-list',
    templateUrl: './customers-list.component.html'
})

export class CustomersListComponent implements OnInit {
  private _customers: ICustomer[] = [];
  @Input() get customers(): ICustomer[] {
    return this._customers;
  }

  set customers(value: ICustomer[]) {
    if (value) {
      this.filteredCustomers = this._customers = value;
      //this.calculateOrders();
    }
  }

  filteredCustomers: any[] = [];
  customersOrderTotal: number;
  currencyCode: string = 'EUR';

  constructor(private sorterService: SorterService) {}

  ngOnInit(){

  }

/*    calculateOrders() {
      this.customersOrderTotal = 0;
      this.filteredCustomers.forEach((cust: ICustomer) => {
        this.customersOrderTotal += cust.orderTotal;
      });
    }
*/
    filter(data: string) {
        if (data) {
            this.filteredCustomers = this.customers.filter((cust: ICustomer) => {
                return cust.sellerCode.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                      cust.sellerName.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                       cust.sellerParent.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                       cust.catalogID.toString().indexOf(data) > -1 ||
                       cust.orderPrefix.toString().indexOf(data) > -1 ||
                       cust.customerPrefix.toString().indexOf(data) > -1 ||
                       //cust.radialPaymentsEnabled.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                       cust.radialTaxEnabled.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                       //cust.radialFrauEnabled.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                       cust.jdaStoreNumber.toString().indexOf(data) > -1 ||
                       cust.jdaDeptNumber.toString().indexOf(data) > -1 ||
                       /*cust.status.toString().indexOf(data) > -1 ||
                       cust.tenders.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                       cust.fulfillNodes.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                       cust.gcProviders.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                       cust.sourcingRules.toLowerCase().indexOf(data.toLowerCase()) > -1 ||*/
                       cust.realtimeInvCalls.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                       cust.hfrEnabled.toString().indexOf(data) > -1 ||
                       cust.radialRMAEnabled.toString().indexOf(data) > -1 ||
                       cust.prmsInvEnabled.toLowerCase().indexOf(data.toLowerCase()) > -1;
                       /*cust.sourcingRuleList.toString().indexOf(data) > -1 ||
                       cust.paymentTaxDetails.toString().indexOf(data) > -1;*/
            });
        } else {
            this.filteredCustomers = this.customers;
        }
        //this.calculateOrders();
    }

    sort(prop: string) {
      //a sorter service will actually handle the sorting
      this.sorterService.sort(this.filteredCustomers, prop);
    }
}
