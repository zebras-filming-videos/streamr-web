import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { apiMiddleware } from 'redux-api-middleware'
import thunk from 'redux-thunk'

import { routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { persistStore, autoRehydrate } from 'redux-persist'

export default function configureStore (history) {
  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(
        thunk,
        apiMiddleware,
        routerMiddleware(history)
      ),
      autoRehydrate()
    )
  )

  persistStore(store, { whitelist: ['user', 'auth'] })

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
