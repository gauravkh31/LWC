import { LightningElement } from 'lwc';

export default class MyComp3 extends LightningElement {
    showText = false;
    clickHandler = () => {
        this.showText = !this.showText
    }
}