import { hasFormatter } from "../interfaces/hasFormatter.js";
//Module
export class Payment implements hasFormatter{
   
  
    constructor(
        readonly recipient:String,
        private details:String,
        public amount:number,
    ){}

    format(){
      return   `${this.recipient} owes ${this.amount} for ${this.details}`
    }
}