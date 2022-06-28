var xmlGetChild = function(childName) {
    var children = this.childNodes;
    for (var i = 0; i < children.length; i++) {
        if (children[i].nodeName == childName) {
            return children[i];
        }
    }
    return false;
}

var xmlGetAttribute = function (attributeName) {
    var aValue = this.getAttribute(attributeName);
    if (!aValue) {
        //console.error(this.nodeName + "." + attributeName);
        var n = this.getChild(this.nodeName + "." + attributeName);
        if (n) {
            aValue = n.textContent;
        }
    }
    return aValue;
};

Node.prototype.getAttribute2 = xmlGetAttribute;
Node.prototype.getChild = xmlGetChild;


function xmlInit(node) {
    // node.getAttribute = xmlGetAttribute;
    // node.getChild = xmlGetChild;
    // if (node.children) {
    //     for (var i = 0; i < node.children.length; i++) {
    //         xmlInit(node.children[i]);
    //     }
    // }
}