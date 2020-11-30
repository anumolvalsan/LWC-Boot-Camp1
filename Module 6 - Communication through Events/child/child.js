import { LightningElement,api,track } from 'lwc';

export default class Child extends LightningElement {
    @api childname;
    //@api isSelected =false;
    @track buttonLabel ='Select';
    @track varient ='success';

    buttonClick(event){
        this.buttonLabel = event.target.label == 'Select'?'Deselect':'Select';
        this.varient = event.target.label == 'Select'?'destructive':'success';
        //let stat = this.buttonLabel+'ed';
       /* if(this.isSelected == false){
            this.isSelected = true;
        }else{
            this.isSelected = false;
        }*/
        //alert('buttonLabel : '+this.buttonLabel);
        console.log('buttonLabel : '+this.buttonLabel);
        console.log('buttonVarient : '+this.varient);
        
        console.log('event.target.label : '+event.target.label);
        
        const custEve = new CustomEvent(
            'clickbutton',
            {
                bubbles : true,
                composed : true,
                detail:{childname: this.childname,stat :this.buttonLabel }
            }
            );
            this.dispatchEvent(custEve);
    }

    @api
    resetme(){
        alert('want to reset ? ');
        this.buttonLabel = 'Select';
        this.varient='submit';
    }
}