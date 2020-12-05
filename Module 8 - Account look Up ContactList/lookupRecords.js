import { LightningElement,track,api,wire } from 'lwc';
import getAccounts from '@salesforce/apex/LookupRecordController.getAccounts';
import getContacts from '@salesforce/apex/LookupRecordController.getContacts';
import getAccount from '@salesforce/apex/LookupRecordController.getAccount';

const columns = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Title', fieldName: 'Title' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
    { label: 'Email', fieldName: 'Email', type: 'email' }
];

export default class SampleSearch extends LightningElement {
     @track accname;
     @track accid;
     @track cons=[];
     @track errors;
     @track accdetails;
     @track showcon=false;
     @track showacc=false;
     columns = columns;
     @track name;
     @track accdet;

     

     /**
      * Wire method to get all account name based on the name entered by the user
      */
     @wire(getAccounts, {accname : '$accname'})
     accounts;

     /**
      * Wire method to get selected  account
      
     @wire(getAccount,{accid: '$accid'})
     accDetails;
*/
     handleKeyChange(event){
         const s = event.target.value;
         this.accname = s;
         this.showacc=true;
        console.log('handleKeyChange '+this.accname);
    }

    handleReset(event){
        this.showcon = false;
        this.showacc=false;
        this.accname='';
        accounts=[];
        console.log('inside handleReset');
    }

    getCons(event){
        this.accid = event.currentTarget.value;
        console.log('ACC ID:  '+this.accid);
      /*  this.name = this.template.querySelector('lightning-card');
        var det ='';
        const c = this.template.querySelectorAll('lightning-card');
        array.forEach(element => {
            
        }); */
        
        //calling the imperative method to get the contacts
        getContacts({
            accid : this.accid
        })
        .then(result =>{
            this.cons = result;
            this.showcon = true;
            console.log('Results: '+this.cons);
        })
        .catch(error =>{
            console.log('Error: '+error);
            this.showcon = true;
            this.errors=error;
        })

        getAccount({
            accid : this.accid
        })
        .then(result =>{
            this.accdetails =result;
            console.log('SINGLE ACC' + this.accdetails)
        })
        .catch(error=>{
            console.log('SINGLE ACC err'+error)
        })
    }
}