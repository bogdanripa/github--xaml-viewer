if (!window.mappings) window.mappings = {};

window.mappings = {
    ... window.mappings,
    ... {
        'ui:GetRobotCredential': (node) => {return "Get " + parseVariables(node.getAttribute("Username")) + ((parseVariables(node.getAttribute("Username")) && parseVariables(node.getAttribute("Password")))?" and ":" ") + parseVariables(node.getAttribute("Password")) + " from the " + parseVariables(node.getAttribute("AssetName")) + " credential" + (node.getAttribute("FolderPath")?" located in " + parseVariables(node.getAttribute("FolderPath")):"")},
        'ui:InterruptibleDoWhile': (node) => {return "Do While ("+parseVariables(node.getAttribute("Condition")?node.getAttribute("Condition"):node.getChild("ui:InterruptibleDoWhile.Condition").getChild("mva:VisualBasicValue").getAttribute("ExpressionText"))+")"},
        'ui:InvokeWorkflowFile': (node) => {return "Invoke " + parseVariables(node.getAttribute("WorkflowFileName"))},
        'ui:CopyFile': (node) => {return "Copy " + parseVariables(node.getAttribute("Path")) + " to " + parseVariables(node.getAttribute("Destination")) + ""},
        'ui:TriggerScope.Triggers': (node) => {return "Triggers"},
        'ui:TriggerScope.Action': (node) => {return "Actions (" + parseVariables(node.getChild("ActivityAction").getChild("ActivityAction.Argument").getChild("DelegateInArgument").getAttribute("Name")) + ")"},
        'ui:ExecuteQuery': (node) => {return "Execute SQL Query: " + parseVariables(node.getAttribute("Sql"))},
        'ui:SortDataTable': (node) => {return "Sort " + parseVariables(node.getAttribute("DataTable")) + " by " + parseVariables(node.getAttribute("ColumnName")) + " " + parseVariables(node.getAttribute("Order")) + " in " + parseVariables(node.getAttribute("OutputDataTable"))},
        'ui:OutputDataTable': (node) => {return "Write " + parseVariables(node.getAttribute("DataTable")) + " to " + parseVariables(node.getAttribute("Text"))},
        'ui:AddDataRow': (node) => {return "Add row to " + parseVariables(node.getAttribute("DataTable"))},
        'ui:ForEach': (node) => {return "For each item in " + parseVariables(node.getAttribute("Values"))},
        'ui:BuildDataTable': (node) => {return "Build " + parseVariables(node.getAttribute("DataTable")) + " datatable"},
        'ui:GetLastDownloadedFile': (node) => {return "Downloaded File from " + parseVariables(node.getAttribute("DownloadFolder")) + " as " + parseVariables(node.getAttribute("File")) + ""},
        'ui:ForEachRow': (node) => {return "For Each Row in " + parseVariables(node.getAttribute("DataTable"))},
        'uia:MessageReceiverTrigger': (node) => {return "Message Received on " + parseVariables(node.getAttribute("Channel")) + " (" + parseVariables(node.getAttribute("DisplayName")) + ")"},
        'uia:BroadcastMessage': (node) => {return "Broadcast message " + parseVariables(node.getAttribute("Message")) + " on " + parseVariables(node.getAttribute("Channel"))},
        'ui:BeginProcess': (node) => {return "Run Parallel Process " + parseVariables(node.getAttribute("ProcessName"))},
        'ui:ProcessStartTriggerV2': (node) => {return "Process " + parseVariables(node.getAttribute("ProcessName")) + " started (" + parseVariables(node.getAttribute("DisplayName")) + ")"},
        'ui:ProcessEndTriggerV2': (node) => {return "Process " + parseVariables(node.getAttribute("ProcessName")) + " ended (" + parseVariables(node.getAttribute("DisplayName")) + ")"},
        'ui:RepeatNumberOfTimesX': (node) => {return "Repeat " + parseVariables(node.getAttribute("NumberOfTimes")) + " times"},
    }
};
