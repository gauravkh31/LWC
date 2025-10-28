import { LightningElement, track } from 'lwc';
import getAccWithOpps from '@salesforce/apex/accController.getAccWithOpps';


const columns = [
    { label: 'Account Name', fieldName: 'Name' },
    
    { label: 'Annual Revenue', fieldName: 'AnnualRevenue', type: 'currency' },
    
];





const columnsOpp = [
    { label: 'Opportunity Name', fieldName: 'Name' },
    
    { label: 'Amount', fieldName: 'Amount', type: 'currency' },
    
];
export default class AccOppTable extends LightningElement {
    columns = columns ;
    isRowSelected = false; 
    columnsOpp = columnsOpp
    @track oppData;

    @track accountData; 
    connectedCallback(){
        this.loadData();
    }
    

    loadData(){
        getAccWithOpps().then(result=>{
            console.log("data is", result);
            this.accountData = result
        }).catch(error=>{
            console.log("error is", error);
            
        })
    }

    handleSelectedRow(event){

        if(event.detail.config.action=='rowDeselect'){
            this.isRowSelected = false;
            this.oppData = null
        }else{
            this.isRowSelected = true;
            this.loadOppData(event.detail.selectedRows[0].Id);
        }

        
        console.log("is row selected", this.isRowSelected);
        
        console.log("selected row data is", JSON.stringify(event.detail));
        
    }

    loadOppData(accountId){
        this.accountData.find(currItem => {
            if(currItem.Id == accountId){
                this.oppData = currItem.Opportunities
            }
        })
    }
}