import { LightningElement } from 'lwc';

export default class MyComp4 extends LightningElement {
    // myStr = "ram"

    // get myGetter(){
    //     return this.myStr.toUpperCase()
    // }
    currentButton = "OFF"
    get getColorBox(){
        return this.currentButton === "ON" ? "box green" : "box red"
    }
    clickHandler = (event) =>{
        this.currentButton = event.currentTarget.innerText; 
    }
    
}