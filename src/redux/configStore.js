import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
    : compose

const sagaMiddleware = createSagaMiddleware()

const configStore = () => {
  const middleware = [thunk, sagaMiddleware]

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
  )
  sagaMiddleware.run(rootSaga)
  return store
}



export default configStore
