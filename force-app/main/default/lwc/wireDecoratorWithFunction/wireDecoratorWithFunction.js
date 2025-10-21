import { LightningElement, wire } from 'lwc';
import getAccountData from "@salesforce/apex/AccountHelper.getAccountData"

const columns = [
    { label: 'Account Name', fieldName: 'Name' },
    { label: 'Account Industry', fieldName: 'Industry' },
    { label: 'Account Rating', fieldName: 'Rating'}
   
];
export default class WireDecoratorWithFunction extends LightningElement {
    accounts
    errors
    columns = columns;


    @wire(getAccountData)
    accountFunction({data,error}){
        if(data){
            console.log(data);
           let updatedAccounts =  data.map(curritem => {
                let updatedObject = {};
                if(!curritem.hasOwnProperty('Rating')){
                    updatedObject = {...curritem, Rating:"Warm"}
                }else{
                    updatedObject = {...curritem}
                }
                return updatedObject;
            })
            this.accounts = [ ...updatedAccounts]
            this.errors = null
            
        }
        else{
            this.errors = error
            this.accounts = null
            
        }

    }
}