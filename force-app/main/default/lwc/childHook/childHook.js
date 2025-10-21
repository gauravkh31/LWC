import { LightningElement } from 'lwc';

export default class ChildHook extends LightningElement {


    constructor(){
        super()
        console.log("constructor from child");
        
    }


    connectedCallback(){

console.log("connectedcallback from child");
throw new Error("Error while componet child")
    }

    renderedCallback(){
console.log("renderedcallback from child");

    }

    errorCallback(error,stack){

console.log("errorcallback from child");
    }

    disconnectedCallback(){
        console.log("disconnected callback from child");
        
    }
}