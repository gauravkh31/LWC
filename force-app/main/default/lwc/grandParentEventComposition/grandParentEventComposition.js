import { LightningElement } from 'lwc';

export default class GrandParentEventComposition extends LightningElement {


    eventParentHandler(){
        console.log("event calling from grandparent component at parent level");
        
    }

    eventParentDivHandler(){
        console.log("event calling from grandparent component at grandparent level");
    }
}