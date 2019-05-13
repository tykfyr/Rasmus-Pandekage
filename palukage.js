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
    if (value.includes("muslimer") && value.includes("Paludan")) {
        value = value.replace(/muslimer/gi, 'pandekager')
    }
    value = value.replace(/Paludan/gi, 'Klump');

    node.nodeValue = value;
}

window.onload = findAndReplace;
