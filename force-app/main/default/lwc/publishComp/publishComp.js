import { LightningElement, wire} from 'lwc';
import  { publish, MessageContext } from 'lightning/messageService';
import COUNTING_UPDATED_CHANNEL from '@salesforce/messageChannel/CountingUpdated__c';

export default class PublishComp extends LightningElement {
    @wire(MessageContext)
    messageContext;


    handleAdd(){    
        const payload = { 
            operator: 'add',
            constant: 1
        };
        publish(this.messageContext, COUNTING_UPDATED_CHANNEL, payload);
    }

    handleSubs(){
        const payload = { 
            operator: 'subs',
            constant: 1
        };
        publish(this.messageContext, COUNTING_UPDATED_CHANNEL, payload);
    }

    handleMultiply(){
        const payload = { 
            operator: 'multiply',
            constant: 2
        };
        publish(this.messageContext, COUNTING_UPDATED_CHANNEL, payload);
    }   





}