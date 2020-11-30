import { LightningElement } from 'lwc';
import pics from '@salesforce/resourceUrl/images'; //images is the static resource name

export default class Ifelsedemo extends LightningElement {
    tom =pics+'/tom.jpg';
    jerry =pics+'/jerry.png';
    istom=true;
    butLabel = 'Show Jerry';

    show(event) {
        if(this.istom){
            this.istom = false;
            this.butLabel='Show Tom';
        }else{
            this.istom = true;
            this.butLabel='Show Jerry';
        }
        console.log('istom {istom}');
   }
   /* showJerry(event) {
         this.istom = false;
         console.log('istom {istom}');
    }
    showTom(event) {
        this.istom = true;
        console.log('istom {istom}');
   }*/
}