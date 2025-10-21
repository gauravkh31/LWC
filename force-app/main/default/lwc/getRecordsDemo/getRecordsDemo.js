import { LightningElement, wire , api } from 'lwc';
import ACCOUNT_NAME_FIELD from "@salesforce/schema/Account.Name"
import CONTACT_NAME_FIELD from "@salesforce/schema/Contact.Name"
import {getRecords} from "lightning/uiRecordApi"

export default class GetRecordsDemo extends LightningElement {

    outputs
    errors





    @wire(getRecords, {
        records : [
            {
                recordIds: ['001gL000006tv8jQAA'],
                fields: [ACCOUNT_NAME_FIELD]
            }, 
            {
              recordIds: ['003gL00000FtsqMQAR'],
                fields: [CONTACT_NAME_FIELD]  
            }
        ]
    })outputFunction({data,error}){
        if(data){
            this.outputs = data
            this.errors = null
            console.log('data',data);
            
        }else if(error){
            console.log('error', error);
            this.errors = error
            this.outputs = null
        }
    }


}