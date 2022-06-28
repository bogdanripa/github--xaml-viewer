if (!window.mappings) window.mappings = {};

window.mappings = {
    ... window.mappings,
    ... {

        'ui:ExcelApplicationScope': (node) => {return "Using Excel " + parseVariables(node.getAttribute2("WorkbookPath"))},
        'ui:ExcelReadRange': (node) => {return "Read " + parseVariables(node.getAttribute2("SheetName") + "!" + node.getAttribute2("Range")) + " into " + parseVariables(node.getAttribute2("DataTable"))},
        'ui:ReadCsvFile': (node) => {return "Read CSV file " + parseVariables(node.getAttribute2("FilePath")) + " in " + parseVariables(node.getAttribute2("DataTable"))},
        'ui:ElementStateChangeTrigger': (node) => {return node.getAttribute2("DisplayName") + " (" + parseVariables(node.getAttribute2("ElementStateChangeType")) + ")"},
        'ui:SendOutlookMail': (node) => {return "Send email to " + parseVariables(node.getAttribute2("To"))},

        'p:WordApplicationScope': (node) => {return "Using " + parseVariables(node.getAttribute2("FilePath")) + ""},
        'p:WordReplaceText': (node) => {return "Replace " + parseVariables(node.getAttribute2("Search")) + " with " + parseVariables(node.getAttribute2("Replace")) + ""},

        'uga:ReadRange': (node) => {return "Read " + parseVariables(node.getAttribute2("SheetName") + "!" + node.getAttribute2("Range")) + " into " + parseVariables(node.getAttribute2("Result"))},
        'uga:WriteCell': (node) => {return "Write Cell: " + parseVariables(node.getAttribute2("Value")) + " to " + parseVariables(node.getAttribute2("SheetName") + "!" + node.getAttribute2("Cell"))},
        'uga:SendEmail': (node) => {return "Send Email to " + parseVariables(node.getAttribute2("To"))},
        
        'ueab:FilterX': (node) => {return "Filter " + parseVariables(node.getAttribute2("Range")) + " on " + parseVariables(node.getAttribute2("ColumnName"))},
        'ueab:ExcelApplicationCard': (node) => {return "Using Excel " + parseVariables(node.getAttribute2("WorkbookPath")) + " as " + parseVariables(node.getChild("ueab:ExcelApplicationCard.Body").getChild("ActivityAction").getChild("ActivityAction.Argument").getChild("DelegateInArgument").getAttribute2("Name")) + ""},
        'ueab:ExcelForEachRow': (node) => {return "For each " + parseVariables(node.getChild("ueab:ExcelForEachRow.Body").getChild("ActivityAction").getChild("ActivityAction.Argument1").getChild("DelegateInArgument").getAttribute2("Name")) +  " in " + parseVariables(node.getAttribute2("Range")) + " excel range"},
        'ueab:WriteCellX': (node) => {return "Write " + parseVariables(node.getAttribute2("Value")) + " in Excel cell " + parseVariables(node.getAttribute2("Cell")) + ""},
        'ueab:ClearRangeX': (node) => {return "Clear excel range " + parseVariables(node.getAttribute2("TargetRange")) + ""},
        'ueab:InsertSheetX': (node) => {return "Add " + parseVariables(node.getAttribute2("Name")) + " sheet to " + parseVariables(node.getAttribute2("Workbook"))},
        'ueab:CopyPasteRangeX': (node) => {return "Copy " + parseVariables(node.getAttribute2("SourceRange")) + " to " + parseVariables(node.getAttribute2("DestinationRange"))},
        'ueab:DeleteRowsX': (node) => {return "Delete Rows " + parseVariables(node.getAttribute2("RowPositions")) + " from " + parseVariables(node.getAttribute2("Range")) + ""},
        'ueab:DeleteColumnX': (node) => {return "Delete Column " + parseVariables(node.getAttribute2("ColumnName")) + " from " + parseVariables(node.getAttribute2("Range")) + ""},
        'ueab:InsertColumnX': (node) => {return "Insert Column " + parseVariables(node.getAttribute2("NewColumnName")) + " " + node.getAttribute2("RelativePosition") + " " + parseVariables(node.getAttribute2("RelativeColumnName")) + " in " + parseVariables(node.getAttribute2("Range")) + ""},
        'ueab:AutoFillX': (node) => {return "Autofill from " + parseVariables(node.getAttribute2("StartRange")) + ""},
        'ueab:CreatePivotTableX': (node) => {return "Create Pivot Table " + parseVariables(node.getAttribute2("TableName")) + " in " + parseVariables(node.getAttribute2("DestinationRange")) + " from " + parseVariables(node.getAttribute2("Range")) + ""},
        'ueab:PivotTableFieldX': (node) => {return "Add Pivot Field " + parseVariables(node.getAttribute2("FieldName")) + " (" + parseVariables(node.getAttribute2("Function")) + ")"},
        'ueab:FormatRangeX': (node) => {return "Format Range " + parseVariables(node.getAttribute2("Range")) + ""},
        'ueab:AppendRangeX': (node) => {return "Append " + parseVariables(node.getAttribute2("SourceRange")) + " to " + parseVariables(node.getAttribute2("DestinationRange")) + ""},
        'umab:SendMailX': (node) => {return "Send email to " + parseVariables(node.getAttribute2("To")) + ""},
        'ueab:ReadRangeX': (node) => {return "Read " + parseVariables(node.getAttribute2("Range")) + " range to " + parseVariables(node.getAttribute2("SaveTo"));},
        'ui:ReadRange': (node) => {return "Read " + parseVariables(node.getAttribute2("WorkbookPath")) + "!" + parseVariables(node.getAttribute2("SheetName")) + " range to " + parseVariables(node.getAttribute2("DataTable"));},
        'ui:WriteRange': (node) => {return "Write " + parseVariables(node.getAttribute2("DataTable")) + " to " +parseVariables(node.getAttribute2("WorkbookPath")) + "!" + parseVariables(node.getAttribute2("SheetName"));},

        'umam:GetNewestEmail': (node) => {return "Get Newest Email from the " + parseVariables(node.getAttribute2("BrowserFolder")) + " folder"},
        'umam:DownloadEmailAttachments': (node) => {return "Download Email Attachments from " + parseVariables(node.getAttribute2("Email")) + " into " +parseVariables(node.getAttribute2("Result"))},
    }
};
