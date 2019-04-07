export default class DOM {
    static createEl(el, text) {
        const elNode = document.createElement(el);
        const textNode = document.createTextNode(text);
        elNode.appendChild(textNode);
        return elNode
    }

    static createAnchor(href, text) {
        const anchor = document.createElement('a');
        anchor.target = '_blank';
        anchor.href = href;
        const textNode = document.createTextNode(text);
        anchor.appendChild(textNode);
        return anchor
    }
}