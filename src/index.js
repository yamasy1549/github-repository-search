import React                             from 'react'
import thunk                             from 'redux-thunk'
import promise                           from 'redux-promise'
import { createLogger }                  from 'redux-logger'
import { render }                        from 'react-dom'
import { Provider }                      from 'react-redux'
import { applyMiddleware, createStore }  from 'redux'
import App                               from './components/App'
import repoWatcher                       from './reducers'

const logger = createLogger()
const store = createStore(
  repoWatcher,
  applyMiddleware(thunk, promise, logger)
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
