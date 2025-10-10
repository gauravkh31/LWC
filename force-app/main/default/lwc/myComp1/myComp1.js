import { LightningElement} from 'lwc';

export default class MyComp1 extends LightningElement {
     title ="salesforce developer"

    changeHandler = (event) => {
        this.title = event.target.value;
    }
    }
