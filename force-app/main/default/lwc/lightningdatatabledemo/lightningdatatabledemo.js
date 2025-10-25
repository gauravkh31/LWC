import { LightningElement, wire , api} from 'lwc';
import getContactList from '@salesforce/apex/contactController.getContactList'
import { updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


const columns = [
    { label: 'Last Name', fieldName: 'LastName', editable: true },
    { label: 'Title', fieldName: 'Title' , editable: true},
    { label: 'Phone', fieldName: 'Phone' , type: 'phone' , editable: true},
    { label: 'Email', fieldName: 'Email', type: 'email' , editable: true },
    
];
export default class Lightningdatatabledemo extends LightningElement {
@api recordId
draftValues = []
columns = columns;
contactData = []
    @wire(getContactList)
    contacts({data,error}){
        if(data){
            console.log(data);
            this.contactData = data;
            
        }else if(error){
            console.log(error);
            
        }
    }


    async saveHandler(event){
        let records = event.target.draftValues;
        let updateRecordsArray = records.map((currItem)=>{
            let fieldInput = {...currItem}
            return {
                fields: fieldInput
            }
        })
        this.draftValues = []
        let updateRecordsArrayPromise = updateRecordsArray.map((currItem)=>{
            updateRecord(currItem)
        })
        await Promise.all(updateRecordsArrayPromise) 

        
        const toastEvent = new ShowToastEvent({
            title: 'Update Successful',
            variant: 'success',
            message:
                'Data table data is update successfully.',
        });
        this.dispatchEvent(toastEvent);
    }
    
}