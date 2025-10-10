import { LightningElement } from 'lwc';

export default class MyComp5 extends LightningElement {
    //variable for checking the current entered value 
    myStr = "null"
    
    keyUpFunction = (event) => {
        this.myStr = event.target.value;
}


get isMatched(){
    return this.myStr === "gaurav"

}
}