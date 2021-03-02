export const initialState = {
    nameInput: '',
    usernameInput: '',
    emailInput: '',
    passwordInput: '',
    user: null,
    hangars: [],
}

export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'CHANGE_USERNAME_INPUT':
            return {
                ...state,
                usernameInput: action.value
            };
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_HANGARS':
            return {
                ...state,
                hangars: action.hangars
            };
        default:
            return state;
    }
}