const DOMUtils = (() => {
    function createDivBlock(classes, childNodes) {
        const div = document.createElement('div');
        div.classList.add(...classes);
        div.append(...childNodes);
        return div;
    }

    return {
        createDivBlock
    };
})();
