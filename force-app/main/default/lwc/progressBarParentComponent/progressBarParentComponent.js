import { LightningElement } from 'lwc';

export default class ProgressBarParentComponent extends LightningElement {
    percentage;
 
    onKeyUpHandler(event){
        this.percentage = event.target.value <= 100 ? event.target.value : 100;

}
}