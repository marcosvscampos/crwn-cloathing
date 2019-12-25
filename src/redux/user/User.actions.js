import { UserActionTypes } from "./User.types"

const setCurrentUser = (user) => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})

export { setCurrentUser }