import { LightningElement, api  } from 'lwc';

export default class ContactItem extends LightningElement {

    @api contact;

    clickHandler(event){

        // prevent the anchor tag to navigate
        event.preventDefault()

        // creating custom event
        let dispatchableEvent = new CustomEvent("displaydetails", {
            detail: this.contact.Id
    })

    // dispatching the event
    this.dispatchEvent(dispatchableEvent)
}}