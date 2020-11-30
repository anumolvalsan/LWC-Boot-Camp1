import { LightningElement,api,track } from 'lwc';

export default class Parent extends LightningElement {
    @api doreset=false;
    @track children =[
            {
                stat:'Deselected',
                childname: 'Child One'
            },
            {
                stat:'Deselected',
                childname: 'Child Two'
            },
            {
                stat:'Deselected',
                childname: 'Child Three'
            }];

            clickfromparent(event){
               // alert('from parent :');
                this.children.forEach( ch=>{
                    console.log('ch.childname : '+ch.childname);
                    console.log('ch.buttonLabel : '+ch.stat);
                    

                  if(ch.childname == event.detail.childname){
                        //ch.stat = event.detail.stat;
                        ch.stat= event.detail.stat == 'Select'?'Deselected':'Selected';
                  }  
                });
              /*  alert('from parent :'+ event.target.isSelected);
                if(event.target.isSelected){
                    this.parentMessage = 'Selected';
                }else{
                    this.parentMessage = 'Deselected';
                }*/
                
            }
          /*  @api
            reset(doresetfp){
                alert('do reset'+ doresetfp);
                this.doreset = doresetfp;
                alert('do reset'+ this.doreset);
                this.children.forEach( ch=>{
                    //ch.childname = 'Select';
                    ch.stat='Deselected';
                });

                this.template.querySelector('c-child').resetme(true);
            }*/
}