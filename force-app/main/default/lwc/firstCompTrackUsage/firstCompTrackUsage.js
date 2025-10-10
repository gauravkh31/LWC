import { LightningElement } from 'lwc';

export default class FirstCompTrackUsage extends LightningElement {


    first = "Hello"
    second = "world"

    changeFont(){
        this.first = "Namaste"
        this.second = "duniya"
    }
}