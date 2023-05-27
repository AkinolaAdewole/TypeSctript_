import { hasFormatter } from "../interfaces/hasFormatter.js";

export class listTemplate{
    constructor(private container:HTMLUListElement){}
    render(item:hasFormatter, header:string, position:'start'|'end'){
        const li=document.createElement('li')
        const h4=document.createElement('h4');
        //set the innertext of h4 to heading that I am passing
        h4.innerText=header;
        //Append the h4 to the li that I created
        li.append(h4);

        // create a paragraph tag for the li
        const p= document.createElement('p');
        p.innerText=item.format();
        li.append(p);
         

        if(position === 'start'){
            this.container.prepend(li);
        } else{
            this.container.append(li);
        }
    }
}