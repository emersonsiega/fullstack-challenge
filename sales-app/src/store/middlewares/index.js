import { applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

const logger = createLogger({
  duration: true,
})

export default applyMiddleware(thunk, logger)
