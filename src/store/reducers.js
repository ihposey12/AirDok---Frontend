export const initialState = {
    usernameInput: '',
    passwordInput: '',
    user: {username: '', hangar_rentals: []},
    hangars: [],
    selectHangar: null,
    comments: [],
    userComment: null,
    startDateInput: '',
    endDateInput: '',
    commentTitle: '',
    commentDescription: '',
    commentRating: '1'
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
                user: action.user
            }
        case 'SET_COMMENT_TITLE':
            return {
                ...state,
                commentTitle: action.commentTitle
            }
        case 'SET_COMMENT_DESCRIPTION':
            return {
                ...state,
                commentDescription: action.commentDescription
            }
        case 'SET_COMMENT_RATING':
            return {
                ...state,
                commentRating: action.commentRating
            }
        case 'UPDATE_HANGARS':
            return {
                ...state,
                hangars: state.hangars.map(hangar => {
                    if(hangar.id === action.hangar.id) {
                        return action.hangar
                    } else {
                        return hangar
                    }
                })
            }
        default:
            return state;
    }
}