import { LightningElement,track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class QuickCreateRevisited extends NavigationMixin(LightningElement) {
    @track selectedvalue;
    @track showacc =false;
    @track showopp=false;
    @track showcon=false;
    @track showNew=false;
    url;
    

    get options() {
        return [
            { label: 'Account', value: 'Account' },
            { label: 'Opportunity', value: 'Opportunity' },
            { label: 'Contact', value: 'Contact' },
        ];
    }

    handleChange(event) {
        //alert('event.detail.value :: '+event.detail.value);
        
        this.selectedvalue = event.detail.value;
        //alert('this.selectedvalue '+this.selectedvalue);
        if(this.selectedvalue == 'Account'){
            this.showacc=true; console.log('this.showacc '+this.showacc);
            this.showopp=false;
            this.showcon=false;
        }
        if(this.selectedvalue == 'Opportunity'){
            this.showacc=false;
            this.showopp=true;
            this.showcon=false;console.log('this.showopp '+this.showopp);
        }
        if(this.selectedvalue == 'Contact'){
            this.showacc=false;
            this.showopp=false;
            this.showcon=true;console.log('this.showcon '+this.showcon);
        }
        this.showNew = true;
    }

    navigateme(){
        console.log('inside navigate to new');
        
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: this.selectedvalue,
                actionName: 'new'
            }
        });
       /* this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: this.selectedvalue,
                actionName: 'new'
            }
        });*/
    }
}