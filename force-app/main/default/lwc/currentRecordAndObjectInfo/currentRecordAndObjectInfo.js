import { LightningElement, api } from 'lwc';

// importing the logged in user Id
import userId from '@salesforce/user/Id';



export default class CurrentRecordAndObjectInfo extends LightningElement {

    @api recordId;  
    @api objectApiName;
    userId = userId;
}