function appReducer(state = { events: [], filterEvents: [], loading: false }, action) {
    switch (action.type) {

        case "LOAD_EVENTS":
            return { ...state, loading: action.payload }

        case "SHOW_EVENTS":
            return { ...state, events: action.payload };

        case "FILTERED_EVENTS":
            return { ...state, filterEvents: action.payload };

        default:
            return state;
    }
}

export default appReducer;