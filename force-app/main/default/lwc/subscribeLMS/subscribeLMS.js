import { LightningElement , wire} from 'lwc';
import {MessageContext, subscribe, unsubscribe, APPICATION_SCOPE, APPLICATION_SCOPE} from 'lightning/messageService'
import sendMessage from '@salesforce/messageChannel/sendMessage__c'

export default class SubscribeLMS extends LightningElement {

    subscription = null
    @wire(MessageContext) messageContext;
    msg = ""




    connectedCallback(){
        this.subscribeToMessageChannel();
    }

    subscribeToMessageChannel(){
        if(!this.subscription){
            this.subscription = subscribe(
                this.messageContext,
                sendMessage, 
                (message) => this.handleMessage(message), {
                    scope: APPLICATION_SCOPE
                }
            )
        }
    }

    handleMessage(message){
        this.msg =  message.myField
    }


    disconnectedCallback(){
        this.unsubscrieToMessageChannel();



    }



     unsubscribeToMessageChannel() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }
}