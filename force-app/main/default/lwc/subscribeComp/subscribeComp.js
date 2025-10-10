import { LightningElement, wire } from 'lwc';
import { subscribe, MessageContext } from 'lightning/messageService';
import COUNTING_UPDATED_CHANNEL from '@salesforce/messageChannel/CountingUpdated__c';

export default class SubscribeComp extends LightningElement {
value = 0;
    subscription = null 
    @wire(MessageContext)
    messageContext;             
     

    connectedCallback() {
        this.subscribeToMessageChannel();
    }
    subscribeToMessageChannel() {
        this.subscription = subscribe(
            this.messageContext,
            COUNTING_UPDATED_CHANNEL,
            (message) => this.handleMessage(message)
        );
    }

    handleMessage(message) {
        
        if(message.operator === 'add'){
            this.value += message.constant;
        }
        else if(message.operator === 'subs'){
            this.value -= message.constant;
        }
        else if(message.operator === 'multiply'){
            this.value *= message.constant;
        }

            
    
}
}