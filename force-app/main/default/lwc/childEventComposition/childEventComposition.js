import { LightningElement } from 'lwc';

export default class ChildEventComposition extends LightningElement {

    buttonHandler(event){
        let dispatchableEvent = new CustomEvent("myevent", {
            bubbles: true,
            composed: true
        })
        this.dispatchEvent(dispatchableEvent)
    }
}

// bubbles and composed

// false and false means that event only go to its own level like only calling from the parent component inside child
// true and false means that event go to its parent level and calling from the parent level and from parent level by its own level as well
// false and true : not supported
//  true and true means that event go to its parent and grandparent level 