import { SHOW_ALERT, HIDE_ALERT } from "../types";

const handlers = {
    [SHOW_ALERT]: (state, action) => action.payload,
    [HIDE_ALERT]: () => null,
    DEFAULT: state => state
}

export const alertReducer = (state, action) => {
    /* можно так
    switch (action.type) {
        case SHOW_ALERT: return action.payload
        case HIDE_ALERT: return null
        default: return state
    }*/

    // или так
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}