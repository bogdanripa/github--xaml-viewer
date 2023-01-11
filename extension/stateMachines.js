if (!window.mappings) window.mappings = {};

window.mappings = {
    ... window.mappings,
    ... {
        'StateMachine': (node) => {return "State Machine: " + parseVariables(node.getAttribute2("DisplayName")) + " (" + parseVariables(node.getAttribute2("InitialState")) + ")"},
        'StateMachine.Variables': (node) => {return "Variables"},
        'State': (node) => {return "State: " + parseVariables(node.getAttribute2("DisplayName"))},
        'Transition.To': (node) => {return "Will transition to " + parseVariables(node.getAttribute2("DisplayName"))},
        'Transition': (node) => {return "Transition if (" + parseVariables(node.getChild('Transition.Condition').innerHTML) + ")"},
    }
};
