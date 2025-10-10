import { LightningElement } from 'lwc';

export default class DynamicCss extends LightningElement {

    pcolor = "choclate-color"

    buttonHandler(event){

        

        let element = this.template.querySelector("p")
        if(event.target.label === "add Css"){
            element.classList.add("green-border")
        }else if(event.target.label === "remove Css")   {
            element.classList.remove("green-border")
        }else if(event.target.label === "toggle the Css")   {
            element.classList.toggle("green-border")

    }
}
}