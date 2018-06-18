import { connect } from 'react-redux'
import ConfirmAddToken from './confirm-add-token.component'

const extend = require('xtend')

const { addTokens, clearPendingTokens } = require('../../../actions')

const mapStateToProps = ({ metamask }) => {
  const { pendingTokens, suggestedTokens } = metamask
  const params = extend(pendingTokens, suggestedTokens)

  return {
    pendingTokens: params,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTokens: tokens => dispatch(addTokens(tokens)),
    clearPendingTokens: () => dispatch(clearPendingTokens()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmAddToken)
