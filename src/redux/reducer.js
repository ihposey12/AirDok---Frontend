export const initialState = {
    usernameInput: '',
    passwordInput: '',
    user: null,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_USERNAME_INPUT':
            return {
                ...state,
                usernameInput: action.value
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}