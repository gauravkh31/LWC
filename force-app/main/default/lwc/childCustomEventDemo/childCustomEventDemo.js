import { LightningElement } from 'lwc';

export default class ChildCustomEventDemo extends LightningElement {

    buttonHandler(){
        //1. create of custom event

        let mycustomevent = new CustomEvent("displaymsg");
        this.dispatchEvent(mycustomevent)
    }
}