export class listTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, header, postion) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = header;
    }
}
