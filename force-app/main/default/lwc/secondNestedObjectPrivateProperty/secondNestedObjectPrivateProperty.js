import { LightningElement, track } from 'lwc';

export default class SecondNestedObjectPrivateProperty extends LightningElement {


  @track first = [11,12,13]

    clickHandler(){
       this.first[0] = 100
       
       
    }

}