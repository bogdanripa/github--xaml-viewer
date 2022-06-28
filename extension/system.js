if (!window.mappings) window.mappings = {};

function ui_CreateFile(node) {
    var fName = node.getAttribute2("Name");
    return "Create File (" + parseVariables(fName) + ")";
}

function ui_SetCredential(node) {
    var un = node.getAttribute2("UserName");
    var pwd = node.getAttribute2("SecurePassword");
    var assetName = node.getAttribute2("CredentialName");
    var folder = node.getAttribute2("FolderPath");
    return "Set " + parseVariables(un) + ((parseVariables(un) && parseVariables(pwd))?" and ":" ") + parseVariables(pwd) + " to the " + parseVariables(assetName) + " credential" + (folder?" located in " + parseVariables(folder):"");
}

function ui_GetRobotCredential(node) {
    var un = node.getAttribute2("Username");
    var pwd = node.getAttribute2("Password");
    var assetName = node.getAttribute2("AssetName");
    var folder = node.getAttribute2("FolderPath");
    return "Get " + parseVariables(un) + ((parseVariables(un) && parseVariables(pwd))?" and ":" ") + parseVariables(pwd) + " from the " + parseVariables(assetName) + " credential" + (folder?" located in " + parseVariables(folder):"");
}

window.mappings = {
    ... window.mappings,
    ... {
        'ui:GetRobotCredential': ui_GetRobotCredential,
        'ui:SetCredential': ui_SetCredential,
        'ui:InterruptibleDoWhile': (node) => {return "Do While ("+parseVariables(node.getAttribute2("Condition")?node.getAttribute2("Condition"):node.getChild("ui:InterruptibleDoWhile.Condition").getChild("mva:VisualBasicValue").getAttribute2("ExpressionText"))+")"},
        'ui:InvokeWorkflowFile': (node) => {return "Invoke " + parseVariables(node.getAttribute2("WorkflowFileName"))},
        'ui:CopyFile': (node) => {return "Copy " + parseVariables(node.getAttribute2("Path")) + " to " + parseVariables(node.getAttribute2("Destination")) + ""},
        'ui:CreateFile': ui_CreateFile,
        'ui:WriteTextFile': (node) => {return "Write " + parseVariables(node.getAttribute2("Text")) + " to the " + parseVariables(node.getAttribute2("FileName")) + " text file";},
        'ui:TriggerScope.Triggers': (node) => {return "Triggers"},
        'ui:TriggerScope.Action': (node) => {return "Actions (" + parseVariables(node.getChild("ActivityAction").getChild("ActivityAction.Argument").getChild("DelegateInArgument").getAttribute2("Name")) + ")"},
        'ui:ExecuteQuery': (node) => {return "Execute SQL Query: " + parseVariables(node.getAttribute2("Sql"))},
        'ui:SortDataTable': (node) => {return "Sort " + parseVariables(node.getAttribute2("DataTable")) + " by " + parseVariables(node.getAttribute2("ColumnName")) + " " + parseVariables(node.getAttribute2("Order")) + " in " + parseVariables(node.getAttribute2("OutputDataTable"))},
        'ui:OutputDataTable': (node) => {return "Write " + parseVariables(node.getAttribute2("DataTable")) + " to " + parseVariables(node.getAttribute2("Text"))},
        'ui:AddDataRow': (node) => {return "Add row to " + parseVariables(node.getAttribute2("DataTable"))},
        'ui:ForEach': (node) => {return "For each item in " + parseVariables(node.getAttribute2("Values"))},
        'ui:BuildDataTable': (node) => {return "Build " + parseVariables(node.getAttribute2("DataTable")) + " datatable"},
        'ui:GetLastDownloadedFile': (node) => {return "Downloaded File from " + parseVariables(node.getAttribute2("DownloadFolder")) + " as " + parseVariables(node.getAttribute2("File")) + ""},
        'ui:ForEachRow': (node) => {return "For Each Row in " + parseVariables(node.getAttribute2("DataTable"))},
        'uia:MessageReceiverTrigger': (node) => {return "Message Received on " + parseVariables(node.getAttribute2("Channel")) + " (" + parseVariables(node.getAttribute2("DisplayName")) + ")"},
        'uia:BroadcastMessage': (node) => {return "Broadcast message " + parseVariables(node.getAttribute2("Message")) + " on " + parseVariables(node.getAttribute2("Channel"))},
        'ui:BeginProcess': (node) => {return "Run Parallel Process " + parseVariables(node.getAttribute2("ProcessName"))},
        'ui:ProcessStartTriggerV2': (node) => {return "Process " + parseVariables(node.getAttribute2("ProcessName")) + " started (" + parseVariables(node.getAttribute2("DisplayName")) + ")"},
        'ui:ProcessEndTriggerV2': (node) => {return "Process " + parseVariables(node.getAttribute2("ProcessName")) + " ended (" + parseVariables(node.getAttribute2("DisplayName")) + ")"},
        'ui:RepeatNumberOfTimesX': (node) => {return "Repeat " + parseVariables(node.getAttribute2("NumberOfTimes")) + " times"},
        'ucas:UploadStorageFile': (node) => {return "Upload " + parseVariables(node.getAttribute2("Path")) + " to " + parseVariables(node.getAttribute2("Destination")) + " in " + parseVariables(node.getAttribute2("StorageBucketName"));},
        'ui:AddQueueItem': (node) => {return "Add Queue Item to " + parseVariables(node.getAttribute2("QueueType"));},
        'ui:FilterDataTable': (node) => {return "Filter " + parseVariables(node.getAttribute2("DataTable")) + " datatable";},
        'ui:JoinDataTables': (node) => {return "Join Datatables " + parseVariables(node.getAttribute2("DataTable1")) + " and " + parseVariables() + " to " + parseVariables(node.getAttribute2("OutputDataTable"))},
        'ui:GetRobotAsset': (node) => {return parseVariables(node.getAttribute2("Value")) + " = " + parseVariables(node.getAttribute2("AssetName")) + "'s asset value" + (node.getAttribute2("FolderPath")?" from the "+parseVariables(node.getAttribute2("FolderPath")) + " folder":"");},
        'ui:SetAsset': (node) => {return "Update the " + parseVariables(node.getAttribute2("AssetName")) + " asset " + (node.getAttribute2("FolderPath")?" from the "+parseVariables(node.getAttribute2("FolderPath")) + " folder":"") + " to " + parseVariables(node.getAttribute2("Value"));},
        'ui:SetTransactionStatus': (node) => {return "Set the " + parseVariables(node.getAttribute2("TransactionItem")) + " transaction status to " + parseVariables(node.getAttribute2("Status"))},
    }
};
