import { LightningElement, api } from 'lwc';

export default class NavbarChildComponent extends LightningElement {

    @api navlist;


    handlerNavSelection(event) {
         
        const navSelected = new CustomEvent('selection', {
            detail: event.target.name
        });
        this.dispatchEvent(navSelected);
    }
}