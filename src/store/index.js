import { createStore } from 'redux'
import { reducer } from './reducers'

export const store = createStore(
    reducer, 
    window.__REDUXDEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )