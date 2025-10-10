import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {



    number1 = "";
    number2 = "";
    result = 0;


    inputhandleChange(event) {

        let name = event.target.name;
        let value = event.target.value;
        
        if (name === "num1") {
            this.number1 = value;
        } else if (name === "num2") {
            this.number2 = value;
        }       
    }




    buttonHandler(event) {
        
        let label = event.target.label;
        if (label === "Add") {
            this.result = parseInt(this.number1) + parseInt(this.number2);
        } else if (label === "Sub") {
            this.result = parseInt(this.number1) - parseInt(this.number2);
        } else if (label === "Mul") {
            this.result = parseInt(this.number1) * parseInt(this.number2);
        } else if (label === "Div") {
            this.result = parseInt(this.number1) / parseInt(this.number2);
        } 



this.number1 = "";
    this.number2 = "";

    }


    

}