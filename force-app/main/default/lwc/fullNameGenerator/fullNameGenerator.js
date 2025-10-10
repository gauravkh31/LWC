import { LightningElement } from 'lwc';

export default class FullNameGenerator extends LightningElement {

    firstName = ""
    lastName =  ""
    fullName = ""


    inputHandler(event){

        let inputName = event.target.name

        if(inputName === "fname"){
            this.firstName = event.target.value

    }else if(inputName === "lname"){
            this.lastName = event.target.value
        }
    }


    buttonHandler(event){
            this.fullName = (this.firstName.toUpperCase() + " " + this.lastName.toUpperCase())


        this.firstName = ""
        this.lastName = ""
    }
        
    }

