import { LightningElement, wire, api } from 'lwc';
import getParentAccounts from '@salesforce/apex/AccountHelper.getParentAccounts';
import { NavigationMixin } from 'lightning/navigation';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_PARENT from '@salesforce/schema/Account.ParentId';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_SLA_TYPE from '@salesforce/schema/Account.SLA__c';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import ACCOUNT_SLA_EXPIRY_DT from '@salesforce/schema/Account.SLAExpirationDate__c';
import ACCOUNT_NO_OF_LOCATION from '@salesforce/schema/Account.NumberofLocations__c';
import ACCOUNT_DESCRIPTION from '@salesforce/schema/Account.Description';
import RECORD_ID from '@salesforce/schema/Account.Id';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { createRecord, deleteRecord, updateRecord } from 'lightning/uiRecordApi';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

export default class AccountDetails extends NavigationMixin(
    LightningElement
) {


    // initialization
    parentOptions = []
    selParentAcc = ""
    selNoOfLocations = "1"
    selAccName = ""
    selExpDate = ""
    selSlaType = ""
    selDescription = ""
    @api recordId;


    
    @wire(getRecord, {
        recordId: '$recordId',
        fields: [ACCOUNT_PARENT, ACCOUNT_NAME, ACCOUNT_SLA_TYPE, ACCOUNT_SLA_EXPIRY_DT, ACCOUNT_NO_OF_LOCATION, ACCOUNT_DESCRIPTION]
    }) wiredGetRecord({ data, error }) {
        if (data) {
            this.selParentAcc = getFieldValue(data, ACCOUNT_PARENT);
            this.selAccName = getFieldValue(data, ACCOUNT_NAME);
            this.selSlaType = getFieldValue(data, ACCOUNT_SLA_TYPE);

            this.selExpDate = getFieldValue(data, ACCOUNT_SLA_EXPIRY_DT);
            this.selNoOfLocations = getFieldValue(data, ACCOUNT_NO_OF_LOCATION);
            this.selDescription = getFieldValue(data, ACCOUNT_DESCRIPTION);

        } else if (error) {
            console.log("errors are", error);

        }
    }



    @wire(getParentAccounts)
    wired_getParentAccount({ data, error }) {
        this.parentOptions = []
        if (data) {
            console.log(" data is ", data);
            this.parentOptions = data.map((currItem) => ({
                label: currItem.Name,
                value: currItem.Id
            }))

        }
        else if (error) {
            console.log("Error while getting Parent Records", error);

        }
    }


    handleChange(event) {
        console.log("event target is : ", (event.target));
        let { name, value } = event.target;
        if (name === 'parentacc')
            this.selParentAcc = value;

        if (name === 'accname') {
            this.selAccName = value
        }

        if (name === 'slaexpdt') {
            this.selExpDate = value
        }

        if (name === 'slatype') {
            this.selSlaType = value
        }

        if (name === 'noOfLocations') {
            this.selNoOfLocations = value;
        }
        if (name === 'description') {
            this.selDescription = value;
        }
    }



    @wire(getObjectInfo, {
        objectApiName: ACCOUNT_OBJECT
    })
    objectInfo


    @wire(getPicklistValues, {
        recordTypeId: '$objectInfo.data.defaultRecordTypeId',
        fieldApiName: ACCOUNT_SLA_TYPE
    })
    slapicklist;


    saveRecord() {
        if (this.validateInput()) {


            let inputFields = {};
            inputFields[ACCOUNT_NAME.fieldApiName] = this.selAccName;
            inputFields[ACCOUNT_PARENT.fieldApiName] = this.selParentAcc;
            inputFields[ACCOUNT_SLA_EXPIRY_DT.fieldApiName] = this.selExpDate;
            inputFields[ACCOUNT_SLA_TYPE.fieldApiName] = this.selSlaType;
            inputFields[ACCOUNT_NO_OF_LOCATION.fieldApiName] = this.selNoOfLocations;
            inputFields[ACCOUNT_DESCRIPTION.fieldApiName] = this.selDescription;



            if (this.recordId) {
                inputFields[RECORD_ID.fieldApiName] = this.recordId;
                let recordInput2 = {
                    fields: inputFields
                }
                updateRecord(recordInput2).then((result) => {
                    console.log('result', result);
                    this.showToast();
                }).catch((error) => {
                    console.log("error is ", error);

                })
            }
            else {

                // creation operation

                let recordInput = {
                    apiName: ACCOUNT_OBJECT.objectApiName,
                    fields: inputFields
                }





                // create operation
                createRecord(recordInput).then((result) => {
                    console.log('result', result);
                    let myPageRef = {

                        type: 'standard__recordPage',
                        attributes: {
                            recordId: result.id,
                            objectApiName: result.apiName,
                            actionName: 'view'
                        }

                    }

                    this[NavigationMixin.Navigate](myPageRef);

                }).catch((error) => {
                    console.log('error', error);

                })

            }
        }


    }

    validateInput() {
        let fields = Array.from(this.template.querySelectorAll(".validateme"))
        return fields.every(curritem => curritem.checkValidity())
    }


    get getTitle() {
        if (this.recordId) {
            return "Edit Record"
        } else {
            return "Create Record"
        }
    }


    showToast() {
        const event = new ShowToastEvent({
            title: 'Success',
            message:
                'Record Update Successfully!',
        });
        this.dispatchEvent(event);
    }



    get isDeleteAvailable() {
        if (this.recordId) {
            return true;
        } else {
            return false;
        }
    }



    deleteHandler() {
        deleteRecord(this.recordId).then(() => {

            setTimeout(() => {
                let listViewPageReference = {
                    type: 'standard__objectPage',
                    attributes: {
                        objectApiName: ACCOUNT_OBJECT.objectApiName,
                        actionName: 'list'
                    },
                    state: {
                        filterName: 'Recent'
                    }
                }

                this[NavigationMixin.Navigate](listViewPageReference)


            }, 300)

        }).catch((error) => {
            console.log("error is", error);

        })
    }

}



