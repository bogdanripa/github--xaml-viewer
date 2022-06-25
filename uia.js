if (!window.mappings) window.mappings = {};

window.mappings = {
    ... window.mappings,
    ... {
        'uix:NApplicationCard': (node) => {return "Using " + parseVariables(node.getChild("uix:NApplicationCard.TargetApp").getChild("uix:TargetApp").getAttribute("Url")) + " in " + parseVariables(node.getChild("uix:NApplicationCard.TargetApp").getChild("uix:TargetApp").getAttribute("BrowserType")) + ""},
        'uix:NApplicationCard_2': (node) => {return "Using " + parseVariables(node.getChild("uix:NApplicationCard.TargetApp").getChild("uix:TargetApp").getAttribute("FilePath")) + ""},
        'uix:NTypeInto': (node) => {return (node.getAttribute("Text"))?("Type " + parseVariables(node.getAttribute("Text"))):("Type Secure " + parseVariables(node.getAttribute("SecureText")))},
        'uix:NGetText': (node) => {return "Get " + parseVariables(node.getChild("uix:NGetText.Text").getChild("OutArgument").innerHTML) + ""},
        'uix:NKeyboardShortcuts': (node) => {return "Keyboard Shortcut: " + parseVariables(node.getAttribute("Shortcuts"))},
        'uix:NGoToUrl': (node) => {return "Go To Url: " + parseVariables(node.getAttribute("Url"))},
        'uix:NExtractData': (node) => {return "Extract data table to " + parseVariables(node.getAttribute("DataTable")) + ""},
        'ui:GetAttribute': (node) => {return "Get " + parseVariables(node.getAttribute("Attribute")) +" Attribute in " + parseVariables(node.getChild("ui:GetAttribute.Result").innerHTML)},
        'ui:SendHotkey': (node) => {return "Send " + ((node.getAttribute("KeyModifiers") != "None")?(parseVariables(node.getAttribute("KeyModifiers")) + "+"):"") + parseVariables(node.getAttribute("Key"))+ " Hotkey"},
        'ui:WaitUiElementAppear': (node) => {return node.getAttribute("DisplayName") + ": " + parseVariables(node.getAttribute("FoundElement"))},
        's:Click_Target': (node) => {return node.getAttribute("DisplayName") + ((node.getAttribute("el"))?(": " + parseVariables(node.getAttribute("el"))):"")},
        'ui:GetValue': (node) => {return "Get " + parseVariables(node.getChild("ui:GetValue.Value").getChild("OutArgument").innerHTML) + ""},
    }
};
