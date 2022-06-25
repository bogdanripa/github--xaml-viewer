window.mappings = {
    'Assign': (node) => {return "Assign " + parseVariables(node.getChild("Assign.Value").getChild("InArgument").innerHTML) + " to " + parseVariables(node.getChild("Assign.To").getChild("OutArgument").innerHTML)},
    'uix:NApplicationCard': (node) => {return "Using " + parseVariables(node.getChild("uix:NApplicationCard.TargetApp").getChild("uix:TargetApp").getAttribute("Url")) + " in " + parseVariables(node.getChild("uix:NApplicationCard.TargetApp").getChild("uix:TargetApp").getAttribute("BrowserType")) + ""},
    'uix:NApplicationCard_2': (node) => {return "Using " + parseVariables(node.getChild("uix:NApplicationCard.TargetApp").getChild("uix:TargetApp").getAttribute("FilePath")) + ""},
    'Throw': (node) => {return "Throw Exception " + parseVariables(node.getAttribute("Exception"))},
    'ui:InterruptibleDoWhile': (node) => {return "Do While ("+parseVariables(node.getAttribute("Condition")?node.getAttribute("Condition"):node.getChild("ui:InterruptibleDoWhile.Condition").getChild("mva:VisualBasicValue").getAttribute("ExpressionText"))+")"},
    'ui:InvokeWorkflowFile': (node) => {return "Invoke " + parseVariables(node.getAttribute("WorkflowFileName"))},
    'ui:LogMessage': (node) => {return "Log Message (" + parseVariables(node.getAttribute("Message")) + ")"},
    'ueab:ExcelApplicationCard': (node) => {return "Using Excel " + parseVariables(node.getAttribute("WorkbookPath")) + " as " + parseVariables(node.getChild("ueab:ExcelApplicationCard.Body").getChild("ActivityAction").getChild("ActivityAction.Argument").getChild("DelegateInArgument").getAttribute("Name")) + ""},
    'ui:ExcelApplicationScope': (node) => {return "Using Excel " + parseVariables(node.getAttribute("WorkbookPath"))},
    'ueab:ExcelForEachRow': (node) => {return "For each " + parseVariables(node.getChild("ueab:ExcelForEachRow.Body").getChild("ActivityAction").getChild("ActivityAction.Argument1").getChild("DelegateInArgument").getAttribute("Name")) +  " in " + parseVariables(node.getAttribute("Range")) + " excel range"},
    'uix:NTypeInto': (node) => {return (node.getAttribute("Text"))?("Type " + parseVariables(node.getAttribute("Text"))):("Type Secure " + parseVariables(node.getAttribute("SecureText")))},
    'uix:NGetText': (node) => {return "Get " + parseVariables(node.getChild("uix:NGetText.Text").getChild("OutArgument").innerHTML) + ""},
    'ui:CopyFile': (node) => {return "Copy " + parseVariables(node.getAttribute("Path")) + " to " + parseVariables(node.getAttribute("Destination")) + ""},
    'p:WordApplicationScope': (node) => {return "Using " + parseVariables(node.getAttribute("FilePath")) + ""},
    'p:WordReplaceText': (node) => {return "Replace " + parseVariables(node.getAttribute("Search")) + " with " + parseVariables(node.getAttribute("Replace")) + ""},
    'umab:SendMailX': (node) => {return "Send email to " + parseVariables(node.getAttribute("To")) + ""},
    'uix:NKeyboardShortcuts': (node) => {return "Keyboard Shortcut: " + parseVariables(node.getAttribute("Shortcuts"))},
    'ui:GetAttribute': (node) => {return "Get " + parseVariables(node.getAttribute("Attribute")) +" Attribute in " + parseVariables(node.getChild("ui:GetAttribute.Result").innerHTML)},
    'ui:GetRobotCredential': (node) => {return "Get " + parseVariables(node.getAttribute("Username")) + ((parseVariables(node.getAttribute("Username")) && parseVariables(node.getAttribute("Password")))?" and ":" ") + parseVariables(node.getAttribute("Password")) + " from the " + parseVariables(node.getAttribute("AssetName")) + " credential" + (node.getAttribute("FolderPath")?" located in " + parseVariables(node.getAttribute("FolderPath")):"")},
    'Parallel': (node) => {return "Parallel execution" + (parseVariables(node.getChild("Parallel.CompletionCondition").getChild("mva:VisualBasicValue").getAttribute("ExpressionText"))?" - ends when " + parseVariables(node.getChild("Parallel.CompletionCondition").getChild("mva:VisualBasicValue").getAttribute("ExpressionText"))+" is true":"")},
    'ui:TriggerScope.Triggers': (node) => {return "Triggers"},
    'ui:TriggerScope.Action': (node) => {return "Actions (" + parseVariables(node.getChild("ActivityAction").getChild("ActivityAction.Argument").getChild("DelegateInArgument").getAttribute("Name")) + ")"},
    'WriteLine': (node) => {return "Write Line (" + parseVariables(node.getAttribute("Text")) + ")"},
    'Switch': (node) => {return "Switch (" + parseVariables(node.getAttribute("Expression")) + ")"},
    'uga:ReadRange': (node) => {return "Read " + parseVariables(node.getAttribute("SheetName") + "!" + node.getAttribute("Range")) + " into " + parseVariables(node.getAttribute("Result"))},
    'ui:ExcelReadRange': (node) => {return "Read " + parseVariables(node.getAttribute("SheetName") + "!" + node.getAttribute("Range")) + " into " + parseVariables(node.getAttribute("DataTable"))},
    'ui:ForEachRow': (node) => {return "For Each Row in " + parseVariables(node.getAttribute("DataTable"))},
    'uix:NGoToUrl': (node) => {return "Go To Url: " + parseVariables(node.getAttribute("Url"))},
    'uga:WriteCell': (node) => {return "Write Cell: " + parseVariables(node.getAttribute("Value")) + " to " + parseVariables(node.getAttribute("SheetName") + "!" + node.getAttribute("Cell"))},
    'uga:SendEmail': (node) => {return "Send Email to " + parseVariables(node.getAttribute("To"))},
    'ueab:FilterX': (node) => {return "Filter " + parseVariables(node.getAttribute("Range")) + " on " + parseVariables(node.getAttribute("ColumnName"))},
    'ueab:WriteCellX': (node) => {return "Write " + parseVariables(node.getAttribute("Value")) + " in Excel cell " + parseVariables(node.getAttribute("Cell")) + ""},
    'ui:ExecuteQuery': (node) => {return "Execute SQL Query: " + parseVariables(node.getAttribute("Sql"))},
    'ui:SortDataTable': (node) => {return "Sort " + parseVariables(node.getAttribute("DataTable")) + " by " + parseVariables(node.getAttribute("ColumnName")) + " " + parseVariables(node.getAttribute("Order")) + " in " + parseVariables(node.getAttribute("OutputDataTable"))},
    'ui:OutputDataTable': (node) => {return "Write " + parseVariables(node.getAttribute("DataTable")) + " to " + parseVariables(node.getAttribute("Text"))},
    'If': (node) => {return "If " + parseVariables(node.getAttribute("Condition"))},
    'ui:AddDataRow': (node) => {return "Add row to " + parseVariables(node.getAttribute("DataTable"))},
    'AddToCollection': (node) => {return "Add " + parseVariables(node.getAttribute("Item")) + " to " + parseVariables(node.getAttribute("Collection")) + " collection"},
    'ui:ForEach': (node) => {return "For each item in " + parseVariables(node.getAttribute("Values"))},
    'ui:BuildDataTable': (node) => {return "Build " + parseVariables(node.getAttribute("DataTable")) + " datatable"},
    'ueab:ClearRangeX': (node) => {return "Clear excel range " + parseVariables(node.getAttribute("TargetRange")) + ""},
    'uix:NExtractData': (node) => {return "Extract data table to " + parseVariables(node.getAttribute("DataTable")) + ""},
    'ueab:InsertSheetX': (node) => {return "Add " + parseVariables(node.getAttribute("Name")) + " sheet to " + parseVariables(node.getAttribute("Workbook"))},
    'ueab:CopyPasteRangeX': (node) => {return "Copy " + parseVariables(node.getAttribute("SourceRange")) + " to " + parseVariables(node.getAttribute("DestinationRange"))},
    'ui:GetLastDownloadedFile': (node) => {return "Downloaded File from " + parseVariables(node.getAttribute("DownloadFolder")) + " as " + parseVariables(node.getAttribute("File")) + ""},
    'ueab:DeleteRowsX': (node) => {return "Delete Rows " + parseVariables(node.getAttribute("RowPositions")) + " from " + parseVariables(node.getAttribute("Range")) + ""},
    'ueab:DeleteColumnX': (node) => {return "Delete Column " + parseVariables(node.getAttribute("ColumnName")) + " from " + parseVariables(node.getAttribute("Range")) + ""},
    'ueab:InsertColumnX': (node) => {return "Insert Column " + parseVariables(node.getAttribute("NewColumnName")) + " " + node.getAttribute("RelativePosition") + " " + parseVariables(node.getAttribute("RelativeColumnName")) + " in " + parseVariables(node.getAttribute("Range")) + ""},
    'ueab:AutoFillX': (node) => {return "Autofill from " + parseVariables(node.getAttribute("StartRange")) + ""},
    'ueab:CreatePivotTableX': (node) => {return "Create Pivot Table " + parseVariables(node.getAttribute("TableName")) + " in " + parseVariables(node.getAttribute("DestinationRange")) + " from " + parseVariables(node.getAttribute("Range")) + ""},
    'ueab:PivotTableFieldX': (node) => {return "Add Pivot Field " + parseVariables(node.getAttribute("FieldName")) + " (" + parseVariables(node.getAttribute("Function")) + ")"},
    'ueab:FormatRangeX': (node) => {return "Format Range " + parseVariables(node.getAttribute("Range")) + ""},
    'ueab:AppendRangeX': (node) => {return "Append " + parseVariables(node.getAttribute("SourceRange")) + " to " + parseVariables(node.getAttribute("DestinationRange")) + ""},
    'ui:RepeatNumberOfTimesX': (node) => {return "Repeat " + parseVariables(node.getAttribute("NumberOfTimes")) + " times"},
    'ui:SendOutlookMail': (node) => {return "Send email to " + parseVariables(node.getAttribute("To"))},
    'ui:GetValue': (node) => {return "Get " + parseVariables(node.getChild("ui:GetValue.Value").getChild("OutArgument").innerHTML) + ""},
    'ui:AssignOperation': (node) => {return "Assign " + parseVariables(node.getChild("ui:AssignOperation.Value").innerHTML) + " to " + parseVariables(node.getChild("ui:AssignOperation.To").innerHTML)},
//    'Sequence.Variables': (node) => {return "Variables"},
    'Variable': (node) => {return "var " + parseVariables(node.getAttribute("x:TypeArguments")) + " " + parseVariables(node.getAttribute("Name")) + (node.getAttribute("Default")?(" = " + parseVariables(node.getAttribute("Default"))):"")},
//    'x:Members': (node) => {return "Arguments"},
    'x:Property': (node) => {return parseVariables(node.getAttribute("Type")) + " " + parseVariables(node.getAttribute("Name"))},
    'ui:SendHotkey': (node) => {return "Send " + ((node.getAttribute("KeyModifiers") != "None")?(parseVariables(node.getAttribute("KeyModifiers")) + "+"):"") + parseVariables(node.getAttribute("Key"))+ " Hotkey"},
    'ui:WaitUiElementAppear': (node) => {return node.getAttribute("DisplayName") + ": " + parseVariables(node.getAttribute("FoundElement"))},
    's:Click_Target': (node) => {return node.getAttribute("DisplayName") + ((node.getAttribute("el"))?(": " + parseVariables(node.getAttribute("el"))):"")},
    'ui:MessageBox': (node) => {return "Display Message Box: " + parseVariables(node.getAttribute("Text"))},
    'ui:ReadCsvFile': (node) => {return "Read CSV file " + parseVariables(node.getAttribute("FilePath")) + " in " + parseVariables(node.getAttribute("DataTable"))},
    'uia:MessageReceiverTrigger': (node) => {return "Message Received on " + parseVariables(node.getAttribute("Channel")) + " (" + parseVariables(node.getAttribute("DisplayName")) + ")"},
    'ui:ProcessStartTriggerV2': (node) => {return "Process " + parseVariables(node.getAttribute("ProcessName")) + " started (" + parseVariables(node.getAttribute("DisplayName")) + ")"},
    'ui:ProcessEndTriggerV2': (node) => {return "Process " + parseVariables(node.getAttribute("ProcessName")) + " ended (" + parseVariables(node.getAttribute("DisplayName")) + ")"},
    'uia:BroadcastMessage': (node) => {return "Broadcast message " + parseVariables(node.getAttribute("Message")) + " on " + parseVariables(node.getAttribute("Channel"))},
    'ui:BeginProcess': (node) => {return "Run Parallel Process " + parseVariables(node.getAttribute("ProcessName"))},
    'ui:ElementStateChangeTrigger': (node) => {return node.getAttribute("DisplayName") + " (" + parseVariables(node.getAttribute("ElementStateChangeType")) + ")"},
    'TryCatch': (node) => {return "Try"},
    'Catch': (node) => {return "Catch " + parseVariables(node.getAttribute("x:TypeArguments"))},
    'umam:GetNewestEmail': (node) => {return "Get Newest Email from the " + parseVariables(node.getAttribute("BrowserFolder")) + " folder"},
    'umam:DownloadEmailAttachments': (node) => {return "Download Email Attachments from " + parseVariables(node.getAttribute("Email")) + " into " +parseVariables(node.getAttribute("Result"))},
};

function attachToPage() {
	if (window.location.href.match(/\.xaml$/)) {
		if (document.getElementsByClassName('type-xml').length > 0) {
			if (document.getElementsByClassName('type-xml')[0].id != 'canvas') {
				var xamlContent = document.getElementsByClassName('type-xml')[0].innerText;
				document.getElementsByClassName('type-xml')[0].innerHTML = '';
				document.getElementsByClassName('type-xml')[0].id = 'canvas';
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
            if (!node.children[i].getAttribute("sap2010:WorkflowViewState.IdRef") &&  !window.mappings[node.children[i].nodeName] && !node.children[i].getAttribute("DisplayName")) {
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
    xmlDoc = parser.parseFromString(xamlContent, 'application/xml');

    xmlInit(xmlDoc.firstChild);
    el.insertAdjacentHTML('beforeend', '<div id="xamlNodeProperties"></div>')
    renderRec(el, xmlDoc.firstChild);
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

function renderRec(del, node) {
    var k = node.nodeName;
    var el = del;
    var added = false;
    var xKey = node.getAttribute("x:Key");
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

    var DisplayName = node.getAttribute('DisplayName');
    if (node.getAttribute("sap2010:WorkflowViewState.IdRef") || window.mappings[k] || node.getAttribute("DisplayName")) {
        var html = '<div class="el" id="el'+(window.elIdx+1)+'">';

        if (!DisplayName) DisplayName = k.replace(/^.*:/, '');

        if (window.mappings[k]) {
            try {
                if (k == 'uix:NApplicationCard') {
                    if (!node.getChild("uix:NApplicationCard.TargetApp").getChild("uix:TargetApp").getAttribute("Url")) {
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
                if (viewStates[i].getAttribute('x:Key') == 'IsExpanded') {
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