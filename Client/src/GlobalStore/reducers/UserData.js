let localData = localStorage.getItem("userData")
var initialState = localData == null ? null : JSON.parse(localStorage.getItem("userData"));

const userData = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
            let data = action.data
            return (
                state = data
            )
            break;
        default:
            return state
            break;
    }
}

export default userData