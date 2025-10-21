import { LightningElement } from 'lwc';

export default class ParentHook extends LightningElement {
    displayChild = false;

    constructor(){
        super()
        console.log("constructor from parent");
        
    }


    connectedCallback(){

console.log("connectedcallback from parent");
    }

    renderedCallback(){
console.log("renderedcallback from parent");

    }

    errorCallback(error,stack){

console.log("errorcallback from parent");
console.log("error", error);
console.log("stack", stack);


    }

    disconnectedCallback(){
        console.log("disconnected callback from parent");
        
    }

    changeHandler(event){
        this.displayChild = event.target.checked;
    }
}