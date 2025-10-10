import { LightningElement , api } from 'lwc';


export default class RecordEditForm extends LightningElement {


    @api recordId
    objectApiName = 'Account'
    fields = ['Name', 'Phone', 'Website']
}