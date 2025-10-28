import { LightningElement , api } from 'lwc';


export default class RecordEditForm extends LightningElement {
isClicked = false;

    @api recordId
    objectApiName = 'Account'
    fields = ['Name', 'Phone', 'Website']

    buttonClickHandler(event){
        this.isClicked = !this.isClicked;
    }

    closeClickHandler(){
        this.isClicked = false;
    }
}