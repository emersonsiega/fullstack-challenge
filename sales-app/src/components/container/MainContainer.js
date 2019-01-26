import React, { useEffect, Suspense } from 'react'
import { connect } from 'react-redux'

import { fetchAll } from '../../store/actions/shared'
import MainContent from '../presentational/MainContent'
import LoadingSpinner from '../presentational/LoadingSpinner'

const MainContainer = ({ children, onLoad }) => {
  useEffect(() => {
    onLoad()
  }, [])

  return (
    <MainContent>
      <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
    </MainContent>
  )
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
