import { LightningElement , wire} from 'lwc';
import getAccounts from '@salesforce/apex/accController.getAccounts';
import getOpportunities from '@salesforce/apex/oppController.getOpportunities';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name'
import ACCOUNT_REVENUE from '@salesforce/schema/Account.AnnualRevenue'
import ACCOUNT_INDUSTRY from '@salesforce/schema/Account.Industry'
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity'
import OPPORTUNITY_NAME from '@salesforce/schema/Opportunity.Name'
import OPPORTUNITY_TYPE from '@salesforce/schema/Opportunity.Type'
import OPPORTUNITY_STAGENAME  from '@salesforce/schema/Opportunity.StageName'
import OPPORTUNITY_AMOUNT from '@salesforce/schema/Opportunity.Amount'
import OPPORTUNITY_CLOSEDATE from '@salesforce/schema/Opportunity.CloseDate'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';



export default class Practice extends LightningElement {
    accounts;
    opportunities;
    accountModelStatus = false; 
    opportunityModelStatus = false;
    accountSearchKey =''
    opportunitySearchKey = ''
    objectApiNameAccount = ACCOUNT_OBJECT;
    objectApiNameOpportunity = OPPORTUNITY_OBJECT;
    fieldsOpportunity = [OPPORTUNITY_NAME, OPPORTUNITY_TYPE, OPPORTUNITY_STAGENAME, OPPORTUNITY_AMOUNT, OPPORTUNITY_CLOSEDATE]
    fieldsAccount = [ACCOUNT_NAME, ACCOUNT_REVENUE, ACCOUNT_INDUSTRY];
    isHighlighted = false;
    selectedAccountId = null;
    
    // get accountName(){
    //     return this.accounts.name? this.accounts.name : ''
    // }

    selectedCardHandler(event){
        this.isHighlighted = !this.isHighlighted;
    }

    get getClassHighlightCss(){
        return this.isHighlighted ? 'highlight-box' : '';
    }

    connectedCallback() {
        this.loadAccounts();
        this.loadOpportunities();
    };

    loadAccounts(){
        getAccounts({ searchKey: this.accountSearchKey })
            .then((result) => {
                console.log("accounts result is", result);
                this.accounts = result;
                
            })
            .catch(error => {
                console.error('Error fetching accounts:', error);
            });
    }


    loadOpportunities(){
        getOpportunities({ searchKey: this.opportunitySearchKey })
            .then((result) => {
                console.log("opp result is", result);
                this.opportunities = result;
                
            })
            .catch(error => {
                console.error('Error fetching opps:', error);
            });
    }



    



    openAccountModel(){
        console.log("it is working before", this.accountModelStatus);
        this.accountModelStatus = !this.accountModelStatus;
        console.log("it is working after", this.accountModelStatus);
        
    }

    handleSuccessAccount(event) {
        const evt = new ShowToastEvent({
            title: 'Account created',
            message: 'Record ID: ' + event.detail.id,
            variant: 'success',
        });
        this.dispatchEvent(evt);
        this.accountModelStatus = false;
    }


    openOpportunityModel(){
        this.opportunityModelStatus = !this.opportunityModelStatus;
    }



    handleSuccessOpportunity(event){
        const evt = new ShowToastEvent({
            title: 'Opportunity created',
            message: 'Record ID: ' + event.detail.id,
            variant: 'success',
        });
        this.dispatchEvent(evt);
        this.opportunityModelStatus = false;
    }



    accountSearchChangeHandler(event){
        this.accountSearchKey = event.target.value;
        // console.log("event",JSON.stringify(event.target.value));
        this.loadAccounts()
        
    }


    opportunitySearchChangeHandler(event){
        this.opportunitySearchKey = event.target.value;
        this.loadOpportunities()
    }

}