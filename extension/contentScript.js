if (!window.mappings) window.mappings = {};

function uip_Throw(node) {
    var ex = node.getAttribute2("Exception");
    if (!ex) {
        ex = node.textContent;
    }
    return "Throw Exception " + parseVariables(ex);
}

window.mappings = {
    ... window.mappings,
    ... {
        'x:Members': (node) => {return "Worflow arguments"},
        'x:Property': (node) => {return parseVariables(node.getAttribute2("Type")) + " " + parseVariables(node.getAttribute2("Name"))},
        'Sequence.Variables': (node) => {return "Variables"},
        'Flowchart.Variables': (node) => {return "Variables"},
        'Variable': (node) => {return "var " + parseVariables(node.getAttribute2("x:TypeArguments")) + " " + parseVariables(node.getAttribute2("Name")) + (node.getAttribute2("Default")?(" = " + parseVariables(node.getAttribute2("Default"))):"")},
        'Flowchart': (node) => {return "Flowchart " + parseVariables(node.getAttribute2("DisplayName")) + " ("+ parseVariables(node.getChild('Flowchart.StartNode').children[0].innerHTML) +")"},
        'FlowStep':  (node) => {return "Flow step " + parseVariables(node.getAttribute2("x:Name"))},
        'Assign': (node) => {return parseVariables(node.getChild("Assign.To").getChild("OutArgument").textContent) + " = " + parseVariables(node.getChild("Assign.Value").getChild("InArgument").textContent)},
        'ui:AssignOperation': (node) => {return parseVariables(node.getChild("ui:AssignOperation.To").textContent) + " = " + parseVariables(node.getChild("ui:AssignOperation.Value").textContent);},
        'If': (node) => {return "If " + parseVariables(node.getAttribute2("Condition"))},
        'FlowDecision': (node) => {return "If " + parseVariables(node.getChild("FlowDecision.Condition").children[0].getAttribute2("ExpressionText"))},
        'FlowDecision.True': (node) => {return "Then"},
        'FlowDecision.False': (node) => {return "Else"},
        'FlowStep.Next': (node) => {return "Go To " + parseVariables(node.children[0].innerHTML)},
        'WriteLine': (node) => {return "Write Line (" + parseVariables(node.getAttribute2("Text")) + ")"},
        'Switch': (node) => {return "Switch (" + parseVariables(node.getAttribute2("Expression")) + ")"},
        'AddToCollection': (node) => {return "Add " + parseVariables(node.getAttribute2("Item")) + " to " + parseVariables(node.getAttribute2("Collection")) + " collection"},
        'TryCatch': (node) => {return "Try"},
        'Catch': (node) => {return "Catch " + parseVariables(node.getAttribute2("x:TypeArguments"))},
        'Throw': uip_Throw,
        'Parallel': (node) => {return "Parallel execution" + (parseVariables(node.getChild("Parallel.CompletionCondition").getChild("mva:VisualBasicValue").getAttribute2("ExpressionText"))?" - ends when " + parseVariables(node.getChild("Parallel.CompletionCondition").getChild("mva:VisualBasicValue").getAttribute2("ExpressionText"))+" is true":"")},
        'ui:MessageBox': (node) => {return "Display Message Box: " + parseVariables(node.getAttribute2("Text"))},
        'ui:LogMessage': (node) => {return "Log Message (" + parseVariables(node.getAttribute2("Message")?node.getAttribute2("Message"):node.getChild("ui:LogMessage.Message").textContent) + ")"},
    }
};

function attachToPage() {
	if (window.location.href.match(/\.xaml$/)) {
		if (document.getElementsByClassName('type-xml').length > 0) {
			if (document.getElementsByClassName('type-xml')[0].id != 'canvas') {
				var xamlContent = document.getElementsByClassName('type-xml')[0].innerText;
				document.getElementsByClassName('type-xml')[0].innerHTML = '';
				document.getElementsByClassName('type-xml')[0].id = 'canvas';
                document.getElementById("canvas").classList.add(document.documentElement.getAttribute('data-color-mode'));
                renderXAML(document.getElementById("canvas"), xamlContent);
			}
		}
	}
}

attachToPage();
setInterval(attachToPage, 1000);

function parseVariables(str, dontAddSpan, keepFormat) {
    var iStr = str;
    str = str.toString();
    if (!keepFormat) {
        str = str.replace('{x:Null}', '');
        str = str.replace(/\[k\([a-z]+\)\]/ig, '');
        str = str.replace(/{}/gi, '');
        
        str = str.replace(/\s*^\[(.*)\]\s*$/, '$1');
        
        str = str.replace(/\.ByIndex\(([\d]+)\)/ig, '[$1]');
        
        str = str.replace(/string.Format\("([^"]+)"[^\]]*/gi, '$1');

        str = str.replace(/Saved\.Values\(Of [^\)]+\)\("([^"]+)"\)\.([a-z0-9_]+)/gi, '$1.$2');
        str = str.replace(/Saved\.Values\(Of [^\)]+\)\("([^"]+)"\)/gi, '$1');
        

        str = str.replace(/\"/g, '');

        str = str.replace(/([a-z0-9_ \.]+)\.ByField\(([^\)]+)\)/gi, '$1.$2');

        str = str.replace(/([a-z0-9_]+)\.Sheet\(([^\)]+)\)\.Cell\(([^\)]+)\)/gi, '[$1] $2!$3');
        str = str.replace(/([a-z0-9_]+)\.Sheet\(([^\)]+)\)\.Range\(([^\)]+)\)/gi, '[$1] $2!$3');
        str = str.replace(/([a-z0-9_]+)\.Table\(([^\)]+)\)(\.DataTableOutValue)?/gi, '[$1] $2');
        str = str.replace(/([a-z0-9_]+)\.Sheet\(([^\)]+)\)(\.DataTableOutValue)?/gi, '[$1] $2');
        str = str.replace(/\.toString\(?\)?/ig, '');
    }

    if (!dontAddSpan && str != '') {
        str = '<span class="var" title="'+iStr.replace(/"/g, '\\"')+'">' + str + '<\/span>';
    }
    return str;
}

function encodeHTML(str) {
    str = str.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
        return '&#' + i.charCodeAt(0) + ';';
    });
    return str;
}

function scrollIntoViewIfNeeded(target) { 
    if (target.getBoundingClientRect().bottom > window.innerHeight) {
        target.scrollIntoView(false);
    }

    if (target.getBoundingClientRect().top < 0) {
        target.scrollIntoView();
    } 
}

function showElProperties(node, pp) {
    if (!node || node.nodeName.match(/^sap\d*:/)) return false;
    var appended = false;
    pp.insertAdjacentHTML('beforeend', '<div class="title">'+node.nodeName+'</div>');
    if (node.attributes && node.attributes.length)
        for (var i=0;i<node.attributes.length;i++) {
            switch (node.attributes[i].name) {
                case 'ScopeIdentifier':
                case 'Version':
                case 'ScopeGuid':
                case 'x:Key':
                case 'Guid':
                case 'Reference':
                case 'ContentHash':
                case 'sap:VirtualizedContainerService.HintSize':
                case 'sap2010:WorkflowViewState.IdRef':
                    break;
                    case 'ImageBase64':
                    case 'IconBase64':
                        pp.insertAdjacentHTML('beforeend', '<div><label>'+node.attributes[i].name+'</label>: <img src="data:image/png; base64, '+node.attributes[i].value+'"/></div>');
                        appended = true;
                        break;
                    default:
                    pp.insertAdjacentHTML('beforeend', '<div><label>'+node.attributes[i].name+'</label>: '+parseVariables(encodeHTML(node.attributes[i].value), false, true)+'</div>');
                    appended = true;
                }
        }
    if (node.children && node.children.length) {
        for (var i=0;i<node.children.length;i++) 
        {
            if (node.children[i].nodeName == 'CSharpReference' || node.children[i].nodeName == 'CSharpValue') {
                pp.insertAdjacentHTML('beforeend', '<div><label>Value</label>: '+parseVariables(encodeHTML(node.textContent), false, true)+'</div>');
                appended = true;
            } else if (!node.children[i].getAttribute2("sap2010:WorkflowViewState.IdRef") &&  !window.mappings[node.children[i].nodeName] && !node.children[i].getAttribute2("DisplayName")) {
                var spp = document.createElement('div');
                spp.classList.add("subproperties");
                if (showElProperties(node.children[i], spp)) {
                    pp.appendChild(spp);
                    appended = true;
                }
            }
        }
    } else {
        if (node.innerHTML) {
            pp.insertAdjacentHTML('beforeend', '<div><label>Value</label>: '+parseVariables(encodeHTML(node.innerHTML), false, true)+'</div>');
            appended = true;
        }
    }
    return appended;
}

function fixPropertiesPosition() {
    var props = document.getElementById('xamlNodeProperties');
    var firstEl = document.getElementById('el1');
    if (!firstEl) return;
    firstEl = firstEl.parentNode;

    var top = firstEl.getBoundingClientRect().top;
    if (top > 0)
        props.style.top = (top+10) + 'px';
    else
        props.style.top = '10px';

    firstEl = firstEl.parentNode;
    var right = window.innerWidth - (firstEl.getBoundingClientRect().left + firstEl.getBoundingClientRect().width);
    props.style.right = (right-5) + 'px';
}
document.addEventListener('scroll', fixPropertiesPosition);

function showElPropertiesCB(event, el) {
    if (event) event.stopPropagation();
    if (!el) el = event.currentTarget;
    var exEl = document.getElementsByClassName('el selected')[0];
    if (exEl) exEl.classList.remove('selected');
    el.classList.add('selected');
    var props = document.getElementById('xamlNodeProperties');
    props.innerHTML = '';
    props.style.display = 'block';
    fixPropertiesPosition();

    var node = window.nodeMap[el.id.replace(/[^\d]/g, '')-1];
    showElProperties(node, props);
}

function keyPressed(e) {
    switch(e.code) {
        case 'Escape':
            var exEl = document.getElementsByClassName('el selected')[0];
            if (exEl) exEl.classList.remove('selected');
            document.getElementById('xamlNodeProperties').style.display = 'none';
            break;
        case 'ArrowDown':
            var sEl = document.getElementsByClassName('el selected')[0];

            if (sEl) {
                var idx = parseInt(sEl.id.replace('el', '')) + 1;
                while(true) {
                    sEl = document.getElementById('el' + idx);
                    if (!sEl) break;
                    if (sEl.offsetParent) break; // is visible
                    sEl = null;
                    idx++;
                }

            } else {
                sEl = document.getElementById('el1');
            }
            if (sEl) {
                showElPropertiesCB(false, sEl);
                scrollIntoViewIfNeeded(sEl.getElementsByClassName('lbl')[0]);
            }
            return false;
            break;
        case 'ArrowUp':
            var sEl = document.getElementsByClassName('el selected')[0];

            if (sEl) {
                var idx = parseInt(sEl.id.replace('el', '')) - 1;
                while(idx > 0) {
                    sEl = document.getElementById('el' + idx);
                    if (sEl.offsetParent) break; // is visible
                    sEl = null;
                    idx--;
                }
            }
            if (sEl) {
                showElPropertiesCB(false, sEl);
                scrollIntoViewIfNeeded(sEl.getElementsByClassName('lbl')[0]);
            }
            return false;
            break;
        case 'ArrowRight':
            var sEl = document.getElementsByClassName('el selected collapsed')[0];
            if (sEl)
                toggleScope(null, sEl);
            break;
        case 'ArrowLeft':
            var sEl = document.getElementsByClassName('el selected')[0];
            if (sEl)
                if (!sEl.classList.contains("collapsed"))
                    toggleScope(null, sEl);
            break;
        }
}
document.onkeydown = keyPressed;

function renderXAML(el, xamlContent) {
    window.elIdx = 0;
    window.nodeMap = [];
    window.initiallyCollapsed = [];

    var parser = new DOMParser();
    window.xmlDoc = parser.parseFromString(xamlContent, 'application/xml');

    xmlInit(window.xmlDoc.firstChild);
    el.insertAdjacentHTML('beforeend', '<div id="xamlNodeProperties"></div>')
    var node = moveVaiablesAndAtgumentsToTheTop(window.xmlDoc.firstChild);
    renderRec(el, node);
    for(var i=window.initiallyCollapsed.length-1;i>=0;i--) {
        toggleScope(null, document.getElementById('el' + window.initiallyCollapsed[i]));
    }
}

function toggleScope(event, el) {
    if (event) {
        event.stopPropagation();
        var ln = event.target;
        el = document.getElementById(ln.id.replace("ln", "el"))
    }

    if (el.classList.contains('scope')) {
        var csign = document.getElementById(el.id.replace("el", "csign"));
        if (el.classList.contains('collapsed')) {
            el.classList.remove('collapsed');
            csign.style.visibility = "hidden";
        } else {
            el.classList.add('collapsed');
            csign.style.visibility = "visible";
        }
    }
}

function addNode(del, html) {
    window.elIdx++;
    del.insertAdjacentHTML('beforeend', '<div class="ln" id="ln' + (window.elIdx) + '">' + (window.elIdx) + '</div><div class="csign" id="csign' + (window.elIdx) + '">&rsaquo;</div>' + html);    
    var el = document.getElementById('el' + window.elIdx);
    var ln = document.getElementById('ln' + window.elIdx);
    ln.addEventListener('click', toggleScope);
    el.addEventListener('click', showElPropertiesCB);
    return el;
}

function rearrangeFlowchart(node) {

    var flowNextSteps = node.getElementsByTagName("FlowStep.Next");
    Array.from(flowNextSteps).forEach((flowNextStep) => {
        var xr = flowNextStep.getChild('x:Reference');
        if (!xr) {
            // new step detected
            var childContents = flowNextStep.children[0];
            if (childContents.nodeName != 'FlowStep') {

                var newStep = window.xmlDoc.createElement("FlowStep");
                newStep.setAttribute('x:Name', childContents.getAttribute('x:Name'));
                newStep.appendChild(childContents);
                node.appendChild(newStep);

                xr = window.xmlDoc.createElement("x:Reference");
                xr.innerHTML = childContents.getAttribute('x:Name');

                flowNextStep.appendChild(xr);
            }
        }
    });

    var flowSteps = node.getElementsByTagName("FlowStep");
    Array.from(flowSteps).forEach((flowStep) => {
        if (flowStep.parentNode != node) {
            var xr = window.xmlDoc.createElement("x:Reference");
            xr.innerHTML = flowStep.getAttribute('x:Name');

            if (flowStep.parentNode.nodeName =='FlowStep.Next') {
                flowStep.parentNode.insertBefore(xr, flowStep);
            } else {
                var nextStep = window.xmlDoc.createElement("FlowStep.Next");
                nextStep.appendChild(xr);
                flowStep.parentNode.insertBefore(nextStep, flowStep);
            }
            node.appendChild(flowStep);
        }
    });
    return node;
}

function rearrangeStateMachine(node) {
    // state machine
    var states = node.getElementsByTagName("State");
    var statesRefs = {};
    for (var i=states.length-1;i>=0;i--) {
        statesRefs[states[i].getAttribute('x:Name')] = states[i].getAttribute('DisplayName');
        if (states[i].parentNode != node) {
            states[i].parentNode.setAttribute('DisplayName', states[i].getAttribute('DisplayName'));
            node.appendChild(states[i]);
        }
    }
    var transitionsTo = node.getElementsByTagName("Transition.To");
    for (var i=transitionsTo.length-1;i>=0;i--) {
        var xr = transitionsTo[i].getChild('x:Reference');
        var tn = transitionsTo[i].getAttribute('DisplayName');
        if (xr) {
            tn = statesRefs[xr.innerHTML];
        }
        transitionsTo[i].setAttribute('DisplayName', tn);
    }

    var initialState = node.getAttribute('InitialState');
    initialState = initialState.replace(/{x:reference\s+([^}]*)}/i, '$1');
    initialState = statesRefs[initialState];
    node.setAttribute('InitialState', initialState);

    return node;
}

function moveVaiablesAndAtgumentsToTheTop(node) {
    for (var varNodeName of ["Sequence.Variables", "StateMachine.Variables", "Flowchart.Variables", "x:Members"]) {
        var variables = node.getElementsByTagName(varNodeName);
        for (var i=variables.length-1;i>=0;i--) {
            variables[i].parentNode.prepend(variables[i]);
        }
    }

    return node;
}

function renderRec(del, node) {
    var k = node.nodeName;
    if (k == 'StateMachine') {
        node = rearrangeStateMachine(node);
    }

    if (k == 'Flowchart') {
        node = rearrangeFlowchart(node);
    }

    if (k == 'CSharpValue' || k == 'CSharpReference') return false;
    var el = del;
    var added = false;
    var xKey = node.getAttribute2("x:Key");
    if (node.parentNode.nodeName == 'Switch' && (xKey || k == 'Switch.Default') && !node.caseProcessed) {
        if (xKey) {
            xKey = "Case " + parseVariables(xKey);
        } else {
            xKey = "Default";
        }
        var html = '<div class="el Case scope" id="el'+(window.elIdx+1)+'"><div class="lbl">' + xKey + ':</div></div>';
        addNode(del, html);

        var elChildren = del.getElementsByClassName('el');
        el = elChildren[elChildren.length-1];

        node.caseProcessed = true;
        renderRec(el, node, k);
        return true;
    }

    var DisplayName = node.getAttribute2('DisplayName');
    if (node.getAttribute2("sap2010:WorkflowViewState.IdRef") || window.mappings[k] || node.getAttribute2("DisplayName")) {
        var html = '<div class="el" id="el'+(window.elIdx+1)+'">';

        if (!DisplayName) DisplayName = k.replace(/^.*:/, '');

        if (window.mappings[k]) {
            try {
                if (k == 'uix:NApplicationCard') {
                    if (!node.getChild("uix:NApplicationCard.TargetApp").getChild("uix:TargetApp").getAttribute2("Url")) {
                        k = 'uix:NApplicationCard_2';
                    }
                }
                var f = window.mappings[k];
                html += '<div class="lbl" title="' + DisplayName + '">'+f(node)+'</div>';
            } catch(err) {
                console.log(err.message);
                console.log(window.mappings[k]);
                html += '<div class="lbl" title="' + k.replace(/^.*:/, '') + '">' + DisplayName + '</div>';
            }
        } else {
            console.log(k);
            html += '<div class="lbl" title="' + k.replace(/^.*:/, '') + '">' + DisplayName + '</div>';
        }
        html += '</div>';
        
        el = addNode(del, html);
        window.nodeMap[window.elIdx-1] = node;
        el.classList.add(k.replace(/[^a-z0-9]/ig, '-'));
    
        var viewStates = node.getChild("sap:WorkflowViewStateService.ViewState");
        if (viewStates) viewStates = viewStates.getChild("scg:Dictionary");
        if (viewStates) viewStates = viewStates.children;
        if (viewStates && viewStates.length)
            for (var i=0;i<viewStates.length;i++) {
                if (viewStates[i].getAttribute2('x:Key') == 'IsExpanded') {
                    if (viewStates[i].innerHTML == 'False') {
                        window.initiallyCollapsed.push(window.elIdx-1);
                    }
                    break;
                }
            }
        
        added = true;
    }
    
    var ladded = false;

    var reversed = false;
    if (k == 'ui:TriggerScope') {
        reversed = true;
    }

    if (node.children) {
        for (var i=0;i<node.children.length;i++) {
            ladded = renderRec(el, node.children[reversed?node.children.length-i-1:i]) || ladded;
        }
    }
    
    if (!ladded && el != del) {
        if (k == 'Sequence') {
            el.classList.add('hide'); // remove empty sequences
        }
    }
    
    if (ladded && el.id != 'canvas') {
        el.classList.add('scope');
    }
    
    return ladded || added;
}