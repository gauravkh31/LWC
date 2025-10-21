import { LightningElement } from 'lwc';

export default class ParentEventComposition extends LightningElement {


    eventChildHandler(){

console.log("event calling from parent component at child level");


    }



    eventChildDivHandler(){

console.log("event calling from parent component at div level");

    }
}