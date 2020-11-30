import { LightningElement,api,track, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import AccountNumber from '@salesforce/schema/Account.AccountNumber';
import Phone from '@salesforce/schema/Account.Phone';
import Type from '@salesforce/schema/Account.Type';
import Website from '@salesforce/schema/Account.Website';
import Rating from '@salesforce/schema/Account.Rating';
import NumberofLocations__c from '@salesforce/schema/Account.NumberofLocations__c';
import Industry from '@salesforce/schema/Account.Industry';

//import getFieldNames from '@salesforce/apex/CommonUtils.getFieldNames';


export default class AccountCreator extends LightningElement {
    objectApiName = ACCOUNT_OBJECT;
    fields = [NAME_FIELD];
    allfields =[NAME_FIELD,AccountNumber,Phone,Type,Website,Rating,NumberofLocations__c];

  /*  @wire(getFieldNames, {objname:{ACCOUNT_OBJECT}})
        allfields; 
     */   

    @track buttonLabel ='Show All Account Fields';
    @track showAll =false;

    
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Account created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });

        const accRecordForm = this.template.querySelector("lightning-record-form");
        //reset the recordId to null, all fields will be reset as well.
        accRecordForm.recordId = null;
        this.showAll = false;
        this.dispatchEvent(toastEvent);
    }

    handleClick(event){
        //alert('Hello' +this.allfields);
        if(this.showAll){
            this.showAll = false;
            buttonLabel ='Show All Account Fields';
        }else{
            this.showAll = true;
            buttonLabel ='Hide All Account Fields';
        }
        
    }

   /* @api
    quickCreate(objName,minFields,fullFields){
        this.objectApiName = objName;
        this.fields =  minFields;
        this.allfields = fullFields;
    }*/
}