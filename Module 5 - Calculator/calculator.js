import { LightningElement,track } from 'lwc';

export default class Calculator extends LightningElement {
    @track exp='';
    @track  ans=0;

   clearall(event){
       this.exp='';
       this.ans=0;
   }

    numberchange(event){
        const num = event.target.name;
        let len=this.exp.length;
        if(this.exp == '' || this.ans == 'Invalid Expression'){
            this.exp =num;
            this.ans = num;
        }else if(this.exp.charAt(len-1) == '=' && num != '='){
            //alert('equal to' +this.exp.charAt(len-1) );
            this.exp = num;
            this.ans =num;
        }else{
            this.exp =this.exp+num;
            //alert('this.exp '+this.exp);

            this.ans =eval(this.exp); 
        }

    }

    calculate(event){
        let len=this.exp.length;
        let lastchar = this.exp.charAt(len-1);
        if(this.exp =='' || lastchar == '='){
            this.exp =0+event.target.name;   
        }else if(this.ans == 'Invalid Expression'){
            this.exp =0+event.target.name;
            this.ans = 0;
        } else if(lastchar == '+' || lastchar == '-' || lastchar == '*' || lastchar == '/'){
            this.exp=this.exp+event.target.name;
            this.ans = 'Invalid Expression';

        }else{
            this.exp=this.exp+event.target.name;
        }
            
        
    }

    showResults(event){

    }

    
}