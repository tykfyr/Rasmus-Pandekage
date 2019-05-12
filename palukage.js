var allElements = [...document.body.getElementsByTagName('*')];

function findAndReplace(){
    allElements.forEach(element =>{
        element.childNodes.forEach(child =>{
            if(child.nodeType === 3){
                replaceText(child);
            }
        });

    });
}

function replaceText (node) {
    let value = node.nodeValue;
    value = value.replace(/Paludan/gi, 'Klump');
    if (value.includes("muslimer")) {
        value = value.replace(/muslimer/gi, 'pandekager')
    }

    node.nodeValue = value;
}

window.onload = findAndReplace();