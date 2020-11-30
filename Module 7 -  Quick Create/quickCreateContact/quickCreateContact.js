import { LightningElement ,track,api} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import FirstName from '@salesforce/schema/Contact.FirstName';
import LastName from '@salesforce/schema/Contact.LastName';
import Phone from '@salesforce/schema/Contact.Phone';
import Email from '@salesforce/schema/Contact.Email';
import LEVEL from '@salesforce/schema/Contact.Level__c';


export default class QuickCreateContact extends LightningElement {
    @track buttonLabel ='Show All Contact Fields';
    @track showAll =false;
    objectApiName = CONTACT_OBJECT;
    fields = [FirstName,LastName,Email];
    allfields =[FirstName,LastName,Phone,Email,LEVEL];

    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Contact created",
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
            buttonLabel ='Show All Contact Fields';
        }else{
            this.showAll = true;
            buttonLabel ='Hide All Contact Fields';
        }
        
    }

    
}