import { LightningElement,api,track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import Opportunity_OBJECT from '@salesforce/schema/Opportunity';
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import STAGE_NAME from '@salesforce/schema/Opportunity.StageName';
import CLOSE_DATE from '@salesforce/schema/Opportunity.CloseDate';
import ACCOUNT_ID from '@salesforce/schema/Opportunity.AccountId';
import TYPE from '@salesforce/schema/Opportunity.Type';
import PROBABILITY from '@salesforce/schema/Opportunity.Probability';
import DESCRIPTION from '@salesforce/schema/Opportunity.Description';
import LEAD_SCORE from '@salesforce/schema/Opportunity.LeadSource';
import CAMPAIGN_ID from '@salesforce/schema/Opportunity.CampaignId';

export default class QuickCreateOpp extends LightningElement {
    objectApiName = Opportunity_OBJECT;
    fields = [NAME_FIELD,STAGE_NAME,CLOSE_DATE,ACCOUNT_ID];
    allfields =[NAME_FIELD,STAGE_NAME,CLOSE_DATE,ACCOUNT_ID,TYPE,PROBABILITY,DESCRIPTION,LEAD_SCORE,CAMPAIGN_ID];

    @track buttonLabel ='Show All Opportunity Fields';
    @track showAll =false;

    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Opportunity created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });

        
        const oppRecordForm = this.template.querySelector("lightning-record-form");
        //reset the recordId to null, all fields will be reset as well.
        oppRecordForm.recordId = null;
        this.showAll = false;
        this.dispatchEvent(toastEvent);
    }

    handleClick(event){
        //alert('Hello'); alert('Hello' +this.showAll);
        if(this.showAll){
            this.showAll = false;
            buttonLabel ='Show All Opportunity Fields';
        }else{
            this.showAll = true;
            buttonLabel ='Hide All Opportunity Fields';
        }
        
    }
}