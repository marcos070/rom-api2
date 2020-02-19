export interface ICustomer {
    id: number;
    sellerCode: string;
    sellerName: string;
    sellerParent: string;
    catalogID?: number;
    orderPrefix: number;
    customerPrefix: number;
  //radialPaymentsEnabled: string;
    radialTaxEnabled: string;
  //radialFrauEnabled: string;
    jdaStoreNumber: number;
    jdaDeptNumber: number;
  //status: number;
  /*tenders: string;
    fulfillNodes: string;
    gcProviders: number;
    sourcingRules: string;*/
    realtimeInvCalls: string;
    hfrEnabled:number;
    radialRMAEnabled: string;
    prmsInvEnabled: string;
  //sourcingRuleList: string;
  //paymentTaxDetails: string;
}

export interface IOrder {
    customerId: number;
    orderItems: IOrderItem[];
}

export interface IOrderItem {
    id: number;
    productName: string;
    itemCost: number;
}

//the "I" signifies that these will clearly be Interfaces, as opposed to a class.
