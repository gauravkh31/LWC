import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class GetListUIDemo extends LightningElement {
    accResult = [];

    @wire(getListUi, {
        objectApiName: ACCOUNT_OBJECT,
        listViewApiName: 'AllAccounts'
    })
    wiredListView({ error, data }) {
        if (data && data.records && data.records.records) {
            this.accResult = data.records.records.map(rec => ({
                id: rec.id,
                name: rec.fields.Name?.value || '',
                type: rec.fields.Type?.value || '',
                phone: rec.fields.Phone?.value || ''
            }));
        } else if (error) {
            console.error(error);
        }
    }
}
