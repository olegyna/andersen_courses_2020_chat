export const DOMUtils = (() => {
    function createDivBlock(classes, childNodes) {
        const div = document.createElement('div');
        div.classList.add(...classes);
        div.append(...childNodes);
        return div;
    }

    function createSection(classes, childNodes) {
        const section = document.createElement('section');
        section.classList.add(...classes);
        section.append(...childNodes);
        return section;
    }

    function createLabel(inputId, text) {
        const label = document.createElement('label');
        label.attributes.for = inputId;
        const b = document.createElement('b');
        const textNode = document.createTextNode(text);
        b.appendChild(textNode);
        label.appendChild(b);
        return label;
    }

    function createInput(id, placeholder, name, type = 'text', classes = [], isRequired = true) {
        const input = document.createElement('input');
        input.id = id;
        input.placeholder = placeholder;
        input.name = name;
        input.type = type;
        input.classList.add(...classes);
        input.required = isRequired;
        return input;
    }

    function createButton(id, text, classes = [], type = 'submit') {
        const button = document.createElement('button');
        button.id = id;
        button.classList.add(...classes);
        button.type = type;
        const textNode = document.createTextNode(text);
        button.appendChild(textNode);
        return button;
    }

    function createUnorderedList(classes, items = []) {
        const ul = document.createElement('ul');
        ul.classList.add(...classes);
        ul.append(...items);
        return ul;
    }

    function createListItem(classes, text) {
        const li = document.createElement('li');
        li.classList.add(...classes);
        li.innerText = text;
        return li;
    }

    function createImage(src, alt, classes) {
        const img = document.createElement('img');
        img.src = src;
        img.alt = alt;
        img.classList.add(...classes);
        return img;
    }

    function createHeader(number, text) {
        const header = document.createElement(`h${number}`);
        const textNode = document.createTextNode(text);
        header.appendChild(textNode);
        return header;
    }

    function createParagraph(text, childNodes = []) {
        const paragraph = document.createElement(`p`);
        const textNode = document.createTextNode(text);
        paragraph.append(...[textNode, ...childNodes]);
        return paragraph;
    }

    function createHR() {
        return document.createElement('hr');
    }

    function createLink(href, text) {
        const a = document.createElement('a');
        a.href = href;
        const textNode = document.createTextNode(text);
        a.appendChild(textNode);
        return a;
    }

    return {
        createSection,
        createDivBlock,
        createLabel,
        createInput,
        createButton,
        createUnorderedList,
        createListItem,
        createImage,
        createHeader,
        createParagraph,
        createHR,
        createLink
    };
})();
