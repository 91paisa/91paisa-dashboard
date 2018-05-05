import { default as React } from 'react'
import { createPortal } from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import styled from 'styled-components'
import { IAuthActions, logout } from '../../actions/auth-actions'
import { IReviewer } from '../../api/reviewer-api'
import { getId } from '../../helpers/reviewer-helper'
import { IReduxState } from '../../store/initial-state'
import { primaryLight, white } from '../../styles/colors'
interface IProps {
  reviewer: IReviewer
  logout: any
}
class ReviewerProfile extends React.Component<IProps> {
  public state = {
    popupOpen: false,
  }
  public render() {
    const portalElement = document.getElementById('root') as HTMLElement
    if (!this.props.reviewer) {
      return null
    }
    return (
      <>
        <Container onClick={this.handleClick} src={this.props.reviewer.image} />
        {this.state.popupOpen &&
          createPortal(
            <BlockClicks onClick={this.handleClick}>
              {this.getMenu()}
            </BlockClicks>,
            portalElement,
          )}
      </>
    )
  }

  private getMenu = () => {
    return (
      <MenuContainer>
        <MenuItem>
          <p>{this.props.reviewer.name}</p>
          <p>{this.props.reviewer.email}</p>
        </MenuItem>
        <MenuItemHover onClick={this.props.logout}>🔴 Logout</MenuItemHover>
      </MenuContainer>
    )
  }

  private handleClick = () => {
    this.setState((initialState: any) => ({
      popupOpen: !initialState.popupOpen,
    }))
  }
}

const MenuItem = styled.div`
  padding: 1rem;
`

const MenuItemHover = MenuItem.extend`
  font-weight: 600;
  cursor: pointer;
  text-transform: capitalize;
  &:hover {
    background: ${primaryLight};
  }
  &:active {
    background: ${primaryLight};
  }
`

const BlockClicks = styled.div`
  width: 100vw;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  background: rgba(255, 255, 255, 0.3);
`

const MenuContainer = styled.div`
  display: flex;
  position: absolute;
  top: 3.2rem;
  padding: 1rem 0;
  right: 1rem;
  z-index: 99999;
  background: ${white};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  flex-direction: column;
  min-width: 120px;
`

const Container = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
  margin-right: 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border: solid ${white} 1px;
  border-radius: 100%;
`

const mapStateToProps = (state: IReduxState) => {
  const reviewerId = getId()
  const currentReviewer = state.reviewers[reviewerId]
  return {
    reviewer: currentReviewer,
  }
}

const mapDispatchToProps = (dispatch: Dispatch<IAuthActions>) =>
  bindActionCreators({ logout }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ReviewerProfile)
