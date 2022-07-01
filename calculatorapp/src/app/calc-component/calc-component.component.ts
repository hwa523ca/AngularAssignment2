import { Component } from '@angular/core';
import { first } from 'rxjs';

@Component({
  selector: 'app-calc-component',
  templateUrl: './calc-component.component.html',
  styleUrls: ['./calc-component.component.css']
})
export class CalcComponentComponent {
    
        public result:number = 0;
    addOperation(firstNo:string,secondNo:string){
        let num1 = Number(firstNo);
        let num2 = Number(secondNo);
        console.log(num1 + num2);
        this.result = num1 + num2;
    }
    subOperation(firstNo:string,secondNo:string){
        let num1 = Number(firstNo);
        let num2 = Number(secondNo);
        console.log(num1 - num2);
        this.result = num1 - num2;
    }
    mulOperation(firstNo:string,secondNo:string){
        let num1 = Number(firstNo);
        let num2 = Number(secondNo);
        console.log(num1 * num2);
        this.result = num1 * num2;
    }
    divOperation(firstNo:string,secondNo:string){
        let num1 = Number(firstNo);
        let num2 = Number(secondNo);
        console.log(num1 / num2);
        this.result = num1 / num2;
    }
}
