import { Component, default as React, Fragment } from 'react'

class TransactionApproveRejectButton extends Component {
  public render() {
    return (
      <Fragment>
        <button>Approve</button>
        <button>Reject</button>
      </Fragment>
    )
  }
}

export default TransactionApproveRejectButton
