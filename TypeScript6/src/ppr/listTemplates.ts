import { hasFormatter } from "../interfaces/hasFormatter.js";

export class listTemplate{
    constructor(private container:HTMLUListElement){}
    render(item:hasFormatter, header:string, postion:'start'|'end'){
        const li=document.createElement('li')
        const h4=document.createElement('h4');
        h4.innerText=header;
        
    }
}