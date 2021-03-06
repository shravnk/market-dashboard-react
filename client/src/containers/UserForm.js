import React, {Component} from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import UserLogin from '../components/UserLogin'
import UserSignup from '../components/UserSignup'
import {newUser, loginUser} from '../actions/userActions.js'


class UserForm extends Component {
  render() {

    const renderForm = () => {
      if ( this.props.match.path === "/login"){
          return (<UserLogin loginUser={this.props.loginUser} history={this.history}/>)
        } else if ( this.props.match.path === "/signup") {
          return(<UserSignup createUser={this.props.newUser} />)
      }
    }
    return(
      renderForm()
    )
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    newUser: newUser,
    loginUser: loginUser}
    , dispatch)
}

export default withRouter(connect(null, mapDispatchToProps)(UserForm))
