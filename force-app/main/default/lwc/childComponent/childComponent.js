import { LightningElement,api } from 'lwc';

export default class ChildComponent extends LightningElement {


    @api displayMessage;
    @api myObject
    @api myBooleanVariable

    

}