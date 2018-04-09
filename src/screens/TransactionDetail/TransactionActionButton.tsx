import { Component, default as React } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import { updateTransaction, updating } from '../../actions/transactions-actions'
import { ITransaction, transactionActionEnum } from '../../api/transaction-api'
import { ApproveButton, RejectButton } from '../../components/Buttons'
import Space, { SpaceEnum } from '../../components/Space'
import { IReduxState } from '../../store/initial-state'
import { alertRed, positiveGreen } from '../../styles/colors'

interface IProps {
  transaction: ITransaction
  updateTransaction: (
    action: transactionActionEnum,
    transaction: ITransaction,
  ) => any
  updating: (transaction: ITransaction) => any
}

class TransactionActionButton extends Component<IProps> {
  public render() {
    const transaction = this.props.transaction

    if (transaction.actionStatus === transactionActionEnum.notAvailable) {
      return null
    }

    if (transaction.actionStatus === transactionActionEnum.updating) {
      return this.handleUpdatingActionStatus()
    }

    if (transaction.actionStatus === transactionActionEnum.approve) {
      return this.handleApprovedActionStatus()
    }

    if (transaction.actionStatus === transactionActionEnum.reject) {
      return this.handleRejectedActionStatus()
    }

    return (
      <Container>
        <ApproveButton onClick={this.handleApprove}>Approve</ApproveButton>
        <Space width={SpaceEnum.xxl} />
        <RejectButton onClick={this.handleReject}>Reject</RejectButton>
      </Container>
    )
  }

  private handleUpdatingActionStatus() {
    return (
      <Container>
        <p>Updating transaction. Please wait</p>
      </Container>
    )
  }

  private handleApprovedActionStatus() {
    return (
      <Container>
        <StatusText actionStatus={this.props.transaction.actionStatus}>
          This transaction has been <strong>approved</strong> by the reviewer
        </StatusText>
      </Container>
    )
  }

  private handleRejectedActionStatus() {
    return (
      <Container>
        <StatusText actionStatus={this.props.transaction.actionStatus}>
          This transaction has been <strong>rejected</strong> by the reviewer
        </StatusText>
      </Container>
    )
  }

  private handleApprove = () => {
    this.handleAction(transactionActionEnum.approve)
  }

  private handleReject = () => {
    this.handleAction(transactionActionEnum.reject)
  }

  private handleAction = (action: transactionActionEnum) => {
    const confirmation = confirm(
      'Are you sure you want to ' +
        transactionActionEnum[action] +
        ' this transaction?',
    )
    if (confirmation) {
      // tslint:disable-next-line
      const { transaction, updateTransaction, updating } = this.props
      updating(transaction)
      updateTransaction(action, transaction)
    }
  }
}

const Container = styled.div`
  margin: 0 auto;
  padding: 1rem 0;
  display: flex;
`

const StatusText: any = styled.p`
  font-style: italic;
  color: ${(props: any) =>
    props.actionStatus === transactionActionEnum.approve
      ? positiveGreen
      : alertRed};
`

const mapStateToProps = (state: IReduxState, props: any) => {
  return {
    transaction: props.transaction,
  }
}

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ updateTransaction, updating }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(
  TransactionActionButton,
)
