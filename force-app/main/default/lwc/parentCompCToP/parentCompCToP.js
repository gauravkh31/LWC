import { LightningElement } from 'lwc';

export default class ParentCompCToP extends LightningElement {

    variable = false;


    handlerOpenButton(){
        this.variable = true;
    }

    modelCloseHandler(){
        this.variable = false;
    }   
}