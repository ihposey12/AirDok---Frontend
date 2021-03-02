import { createStore, compose } from 'redux'
import { reducer } from './reducers'

const enhancers = compose(window.__REDUXDEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const store = createStore(
    reducer, 
    window.__REDUXDEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )