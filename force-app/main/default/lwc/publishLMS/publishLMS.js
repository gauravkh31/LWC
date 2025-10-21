import { LightningElement, wire } from 'lwc';
import {publish, MessageContext} from 'lightning/messageService'
import sendMessage from '@salesforce/messageChannel/sendMessage__c'

export default class PublishLMS extends LightningElement {


    @wire(MessageContext)
    messageContext;

    publishMessage(){
        const payload = {
            myField: 'Welcome to softshala technologies'

        }
        publish(this.messageContext, sendMessage, payload)

    }
}