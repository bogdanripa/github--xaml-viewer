if (!window.mappings) window.mappings = {};

window.mappings = {
    ... window.mappings,
    ... {

        'ui:ExcelApplicationScope': (node) => {return "Using Excel " + parseVariables(node.getAttribute("WorkbookPath"))},
        'ui:ExcelReadRange': (node) => {return "Read " + parseVariables(node.getAttribute("SheetName") + "!" + node.getAttribute("Range")) + " into " + parseVariables(node.getAttribute("DataTable"))},
        'ui:ReadCsvFile': (node) => {return "Read CSV file " + parseVariables(node.getAttribute("FilePath")) + " in " + parseVariables(node.getAttribute("DataTable"))},
        'ui:ElementStateChangeTrigger': (node) => {return node.getAttribute("DisplayName") + " (" + parseVariables(node.getAttribute("ElementStateChangeType")) + ")"},
        'ui:SendOutlookMail': (node) => {return "Send email to " + parseVariables(node.getAttribute("To"))},

        'p:WordApplicationScope': (node) => {return "Using " + parseVariables(node.getAttribute("FilePath")) + ""},
        'p:WordReplaceText': (node) => {return "Replace " + parseVariables(node.getAttribute("Search")) + " with " + parseVariables(node.getAttribute("Replace")) + ""},

        'uga:ReadRange': (node) => {return "Read " + parseVariables(node.getAttribute("SheetName") + "!" + node.getAttribute("Range")) + " into " + parseVariables(node.getAttribute("Result"))},
        'uga:WriteCell': (node) => {return "Write Cell: " + parseVariables(node.getAttribute("Value")) + " to " + parseVariables(node.getAttribute("SheetName") + "!" + node.getAttribute("Cell"))},
        'uga:SendEmail': (node) => {return "Send Email to " + parseVariables(node.getAttribute("To"))},
        
        'ueab:FilterX': (node) => {return "Filter " + parseVariables(node.getAttribute("Range")) + " on " + parseVariables(node.getAttribute("ColumnName"))},
        'ueab:ExcelApplicationCard': (node) => {return "Using Excel " + parseVariables(node.getAttribute("WorkbookPath")) + " as " + parseVariables(node.getChild("ueab:ExcelApplicationCard.Body").getChild("ActivityAction").getChild("ActivityAction.Argument").getChild("DelegateInArgument").getAttribute("Name")) + ""},
        'ueab:ExcelForEachRow': (node) => {return "For each " + parseVariables(node.getChild("ueab:ExcelForEachRow.Body").getChild("ActivityAction").getChild("ActivityAction.Argument1").getChild("DelegateInArgument").getAttribute("Name")) +  " in " + parseVariables(node.getAttribute("Range")) + " excel range"},
        'ueab:WriteCellX': (node) => {return "Write " + parseVariables(node.getAttribute("Value")) + " in Excel cell " + parseVariables(node.getAttribute("Cell")) + ""},
        'ueab:ClearRangeX': (node) => {return "Clear excel range " + parseVariables(node.getAttribute("TargetRange")) + ""},
        'ueab:InsertSheetX': (node) => {return "Add " + parseVariables(node.getAttribute("Name")) + " sheet to " + parseVariables(node.getAttribute("Workbook"))},
        'ueab:CopyPasteRangeX': (node) => {return "Copy " + parseVariables(node.getAttribute("SourceRange")) + " to " + parseVariables(node.getAttribute("DestinationRange"))},
        'ueab:DeleteRowsX': (node) => {return "Delete Rows " + parseVariables(node.getAttribute("RowPositions")) + " from " + parseVariables(node.getAttribute("Range")) + ""},
        'ueab:DeleteColumnX': (node) => {return "Delete Column " + parseVariables(node.getAttribute("ColumnName")) + " from " + parseVariables(node.getAttribute("Range")) + ""},
        'ueab:InsertColumnX': (node) => {return "Insert Column " + parseVariables(node.getAttribute("NewColumnName")) + " " + node.getAttribute("RelativePosition") + " " + parseVariables(node.getAttribute("RelativeColumnName")) + " in " + parseVariables(node.getAttribute("Range")) + ""},
        'ueab:AutoFillX': (node) => {return "Autofill from " + parseVariables(node.getAttribute("StartRange")) + ""},
        'ueab:CreatePivotTableX': (node) => {return "Create Pivot Table " + parseVariables(node.getAttribute("TableName")) + " in " + parseVariables(node.getAttribute("DestinationRange")) + " from " + parseVariables(node.getAttribute("Range")) + ""},
        'ueab:PivotTableFieldX': (node) => {return "Add Pivot Field " + parseVariables(node.getAttribute("FieldName")) + " (" + parseVariables(node.getAttribute("Function")) + ")"},
        'ueab:FormatRangeX': (node) => {return "Format Range " + parseVariables(node.getAttribute("Range")) + ""},
        'ueab:AppendRangeX': (node) => {return "Append " + parseVariables(node.getAttribute("SourceRange")) + " to " + parseVariables(node.getAttribute("DestinationRange")) + ""},
        'umab:SendMailX': (node) => {return "Send email to " + parseVariables(node.getAttribute("To")) + ""},

        'umam:GetNewestEmail': (node) => {return "Get Newest Email from the " + parseVariables(node.getAttribute("BrowserFolder")) + " folder"},
        'umam:DownloadEmailAttachments': (node) => {return "Download Email Attachments from " + parseVariables(node.getAttribute("Email")) + " into " +parseVariables(node.getAttribute("Result"))},
    }
};
