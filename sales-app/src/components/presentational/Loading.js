import React from 'react'
import LoadingBar from 'react-redux-loading'

import { theme } from '../../config/ThemeProvider'

const LoadingHeader = () => (
  <LoadingBar
    style={{
      height: '2px',
      position: 'fixed',
      zIndex: 999,
      top: '56px',
      backgroundColor: theme.headerLoading,
      boxShadow: `0px 0px 10px 0px ${theme.shadow}`,
    }}
  />
)

export default LoadingHeader
