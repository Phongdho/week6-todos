export const StatusFilters = {
    All: "all",
    Active: "active",
    Completed: 'completed'
}
const initialState = {
    status: StatusFilters.All,
}

export default function filtersReducer (state = initialState, action) {
    if (action.type === "statusChange") {
        return {
            ...state,
            status: action.payload,
        }
    }
    return state;
}