import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

import { Banner } from '../common/banners'

import { Field } from 'redux-form'

import {
  Button
} from '../buttons'

import {
  FormError,
  FormRow
} from '../forms'

import {
  TextField,
  reduxFormWrapper
} from '../fields'

const emailField = reduxFormWrapper(<TextField id='email' label='Email Address' />)
const passwordField = reduxFormWrapper(<TextField type='password' id='password' label='Password' />)

export default ({
  error,
  handleSubmit,
  onSubmit,
  submitting,
  valid
}) => (
  <div className='login'>
    <Helmet title='Log In' />

    <Banner>
      <h2>Log In</h2>
    </Banner>

    <form onSubmit={handleSubmit(onSubmit)}>
      {error &&
        <FormError>{error}</FormError>}

      <FormRow>
        <Field name='email' component={emailField} />
      </FormRow>

      <FormRow>
        <Field name='password' component={passwordField} />
      </FormRow>

      <FormRow>
        <Button disabled={submitting || !valid}>Log In</Button>
      </FormRow>

      <p className='subtle'>Or, <Link to='signup'>sign up</Link>. Did you <Link to='/forgot'>forget your password</Link>?</p>
    </form>
  </div>
)
