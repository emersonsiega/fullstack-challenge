import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchAll } from '../../store/actions/shared'
import MainContent from '../presentational/MainContent'

const MainContainer = ({ children, onLoad }) => {
  useEffect(() => {
    onLoad()
  }, [])

  return <MainContent>{children}</MainContent>
}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
  onLoad: () => {
    dispatch(fetchAll())
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer)
