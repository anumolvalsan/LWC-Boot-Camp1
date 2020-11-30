import { LightningElement,api } from 'lwc';

import name from '@salesforce/schema/Account';
import oppfields from '@salesforce/schema/Account';
import accqc from './accqc.html';

export default class Quickcreate extends LightningElement {
    @api recordId; @api oppId; @api accId;
    alwaysT=true;

    onsuccess(event){
        cancelAcc;
    }

    cancelAcc(event){
        const accfields =this.template.querySelectorAll('lightning-input-field');
        if(accfields){
            accfields.array.forEach(element => {
                element.resert();
            });
        }
    }
    cancelopp(event){
        
    }
    cancelcon(event){
        
    }
}