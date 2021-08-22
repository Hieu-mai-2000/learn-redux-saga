import React from 'react'
import PropTypes from 'prop-types'
import loadingGif from '../../assets/gif/loadingwbg.gif'
import { withStyles } from '@material-ui/core'
import styles from './style'
import { bindActionCreators, compose } from 'redux'
import { connect } from 'react-redux'
import * as uiActions from '../../actions/ui'

const Loading = (props) => {
  const { classes, showLoading } = props
  let ui = null
  if (showLoading) {
    ui = (
      <div className={classes.root}>
        <img src={loadingGif} alt='loading' className={classes.loading} />
      </div>
    )
  }

  return ui
}

Loading.propTypes = {
  classes: PropTypes.object,
  showLoading: PropTypes.bool,
}

const mapStateToProps = (state) => {
  return {
    showLoading: state.ui.isLoading,
  }
}

// const mapDisPatchToProps = (dispatch) => {
//   return {
//     uiActions: bindActionCreators(uiActions, dispatch),
//   }
// }

const withConnect = connect(mapStateToProps, null)
export default compose(withStyles(styles), withConnect)(Loading)
