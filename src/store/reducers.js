export const initialState = {
    usernameInput: '',
    passwordInput: '',
    user: null,
    hangars: [],
    selectHangar: null,
    startDate: null,
    endDate: null
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
        case 'SET_SELECT_HANGAR':
            return {
                ...state,
                selectHangar: action.selectHangar
            } 
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }   
        default:
            return state;
    }
}