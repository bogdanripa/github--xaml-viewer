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
    if (this.hasAttributes()) {
        for (var i = 0; i < this.attributes.length; i++) {
            if (this.attributes[i].name == attributeName) {
                return this.attributes[i].value;
            }
        }
    }
    return false;
};

Node.prototype.getAttribute = xmlGetAttribute;
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