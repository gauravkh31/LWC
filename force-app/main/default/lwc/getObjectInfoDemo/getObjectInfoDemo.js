import { LightningElement , wire} from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from "@salesforce/schema/Account"

export default class GetObjectInfoDemo extends LightningElement {

 accountinfo;
 accounterror;

    @wire(getObjectInfo, {
        objectApiName : ACCOUNT_OBJECT
    })
    outputFunction({data, error}){
        if(data){
            console.log(data);
            this.accountinfo = data;
            this.accounterror = null
            
        }else if (error){
            console.log(error);
            this.accountinfo = null
            this.accounterror = error
        }
    }
}