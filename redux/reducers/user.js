import { USER_STATE_CHANGE } from "../constants"

const initialState = {
    currentUser: null
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_STATE_CHANGE:
            return {
                ...state,
                currentUser: action.currentUser
            }
        default:
            return initialState;
    }
}