export const initialState = {
    usernameInput: '',
    passwordInput: '',
    user: {username: '', hangar_rentals: []},
    hangars: [],
    selectHangar: null,
    comments: [],
    userComment: null,
    startDateInput: '',
    endDateInput: ''
}

export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'CHANGE_USERNAME_INPUT':
            return {
                ...state,
                usernameInput: action.value
            };
        case 'CHANGE_PASSWORD_INPUT':
            return {
                ...state,
                passwordInput: action.value
            }
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
        case 'SET_COMMENTS':
            return {
                ...state,
                comments: action.comments
            }
        case 'SET_START_DATE_INPUT':
            return {
                ...state,
                startDateInput: action.startDateInput
            }
        case 'SET_END_DATE_INPUT':
            return {
                ...state,
                endDateInput: action.endDateInput
            }
        case 'ADD_HANGAR_RENTAL':
            return {
                ...state,
                user: {...state?.user, hangar_rentals: [...state.user?.hangar_rentals, action.newHangarRental]}
            }
        default:
            return state;
    }
}