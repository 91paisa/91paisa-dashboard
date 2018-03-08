import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import LoginButton from './LoginButton'

storiesOf('Button', module)
  .add('Login', () => (
    <LoginButton onClick={action('clicked')} loading={false} />
  ))
  .add(' Login loading', () => (
    <LoginButton onClick={action('clicked')} loading={true} />
  ))
