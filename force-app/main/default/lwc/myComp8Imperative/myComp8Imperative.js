import { LightningElement, track } from 'lwc';
import bToLwc from '@salesforce/apex/BankToLwc.bToLwc';

const columns = [
   { label: 'Bank Name',fieldName: 'Bank_Name__c',type: 'text'},
   { label: 'Bank Id',fieldName: 'Id'}
  ]
export default class MyComp8Imperative extends LightningElement {
    @track columns = columns;
    @track data = [];

    connectedCallback(){
        bToLwc().then(result => {
            this.data = result;
        }).catch(error => {
            console.error(error);
        })
    }

}







