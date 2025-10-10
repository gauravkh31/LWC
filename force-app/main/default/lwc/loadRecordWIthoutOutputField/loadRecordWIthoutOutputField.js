import { LightningElement, api, wire } from 'lwc';
import {getRecord, getFieldValue} from 'lightning/uiRecordApi';
import CASE_NUMBER_FIELD from '@salesforce/schema/Case.CaseNumber';
import CASE_ORIGIN_FIELD from '@salesforce/schema/Case.Origin';
import CASE_TYPE_FIELD from '@salesforce/schema/Case.Type';


export default class LoadRecordWIthoutOutputField extends LightningElement {
@api recordId;
    fields = [CASE_NUMBER_FIELD, CASE_ORIGIN_FIELD, CASE_TYPE_FIELD];

    @wire(getRecord, {recordId: '$recordId', fields: '$fields'}) caseVar;

    get caseNumber(){
        return getFieldValue(this.caseVar.data, CASE_NUMBER_FIELD);
    }
        
    get caseOrigin(){
        return getFieldValue(this.caseVar.data, CASE_ORIGIN_FIELD);
    }           

    get caseType(){
        return getFieldValue(this.caseVar.data, CASE_TYPE_FIELD);
    }
}