import { LightningElement } from 'lwc';

export default class GrandParent extends LightningElement {
    count=0;
    total=3;
    clickfromgp(event){
        if(event.detail.stat=='Deselect'){
            this.count++;
        }else{
            this.count=this.count-1;
        }
    }

    resetall(){
        //this.template.querySelector('c-parent').reset(true);
        window.location.reload();
    }
}