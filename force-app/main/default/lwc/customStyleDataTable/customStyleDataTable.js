import { LightningElement, wire } from 'lwc';
import getContactListForDataTable from '@salesforce/apex/contactController.getContactListForDataTable'



const columns = [
    {
        label: 'Name', type: "customName", typeAttributes: {
            contactName: {
                fieldName: "Name"
            }
        }
    },
    {
        label: "Account Name", fieldName: "accountLink", type: 'url', typeAttributes: {
            label:
            {
                fieldName: "accountName",
            },
            target: "_blank"
        }
    },
    {
        label: 'Title', fieldName: 'Title', cellAttributes: {
            class: {
                fieldName: "titleColor"
            }
        }
    },
    {
        label: 'Rank', fieldName : 'Rank__c', type: 'customRank', typeAttributes: {
            rankIcon: {
                fieldName: "rankIcon"
            }
        }
    },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
    { label: 'Email', fieldName: 'Email', type: 'email' },
    { label: 'Picture', type: 'customPicture' , typeAttributes: {
        pictureUrl : {
            fieldName : "Picture__c"
        }
    }
, 
cellAttributes:{
    alignment : "center"
}},

];



export default class CustomStyleDataTable extends LightningElement {
    columns = columns;
    contacts;
    @wire(getContactListForDataTable)
    wiredContacts({ data, error }) {
        if (data) {
            console.log("data is", data);
            this.contacts = data.map(record => {
                let accountLink = '/' + record.AccountId;
                let accountName = record.Account.Name;
                let titleColor = "slds-text-color_success"
                let rankIcon = record.Rank__c >= 5 ? "utility:ribbon" : "utility:trophy";
                return {
                    ...record,
                    accountLink: accountLink,
                    accountName: accountName,
                    titleColor: titleColor,
                    rankIcon : rankIcon
                }
            })

        } else if (error) {
            console.log("error is", error);

        }
    }
}