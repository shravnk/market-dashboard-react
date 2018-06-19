import React, {Component} from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import UserLogin from '../components/UserLogin'
import UserSignup from '../components/UserSignup'

class UserForm extends Component {
  render() {
    const { location } = this.props

    const renderForm = () => {
      if ( location.pathname === "/login"){
          return (<UserLogin />)
        } else if ( location.pathname === "/signup") {
          return(<UserSignup />)
      }
    }
    return(
      renderForm()
    )
  }
}

export default withRouter(connect()(UserForm))
