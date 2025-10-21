import { LightningElement, wire } from 'lwc';
import searchRecords from "@salesforce/apex/customLookupController.searchRecords";
export default class CustomLookup extends LightningElement {


    apiName = "Account"
    searchValue ="United"
    objectLabel = "Account"
    iconName= "standard:account"


    @wire(searchRecords,{
        objectApiName: "$apiName",
          searchKey: "$searchValue"
    })
    outputFunction({data,error}){
        if(data){
            console.log("data", data);
            
        }else if(error){
            console.log("error", error);
            
        }
    }
}
