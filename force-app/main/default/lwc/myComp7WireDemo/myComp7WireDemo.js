import { LightningElement, wire, track  } from 'lwc';
import bToLwc from '@salesforce/apex/BankToLwc.bToLwc';

const columns = [
   { label: 'Bank Name',fieldName: 'Bank_Name__c',type: 'text'},
   { label: 'Bank Id',fieldName: 'Id'}
  ]

export default class MyComp7WireDemo extends LightningElement {
     @track columns = columns;
     @track data = [];


    @wire(bToLwc)
    wiredBanks({error, data}){
        if(data){
            this.data = data;
        }
        else if(error){
            console.error(error);
        }
}

}