import { LightningElement, wire } from 'lwc';
// for using getPicklistValues method , we have to use the record type id and we donot want to hardcode the record type id , we need to get it dynamically, and how we get the record type id , that is by using getObjectInfo api. so importing the same

import {getObjectInfo, getPicklistValues } from "lightning/uiObjectInfoApi"
import ACCOUNT_OBJECT from "@salesforce/schema/Account"
import ACCOUNT_INDUSTRY from "@salesforce/schema/Account.Industry"
export default class GetPicklistValuesDemo extends LightningElement {

    
    selectedValue

    @wire(getObjectInfo, {
        objectApiName:  ACCOUNT_OBJECT
    })
    accountProperty;





    @wire(getPicklistValues, {
        recordTypeId: "$accountProperty.data.defaultRecordTypeId" ,
        fieldApiName: ACCOUNT_INDUSTRY
    })
    industryPicklist


    handleChange(event){
        this.selectedValue = event.target.value
    }


}