import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
  items : []
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case 'items/setItems':
      return { ...state, items: [ ...state.items, { ...payload } ] }

    default:
      return state
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store =  createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store