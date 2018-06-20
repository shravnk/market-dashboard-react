import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import UserLogin from '../components/UserLogin'
import UserSignup from '../components/UserSignup'
import {newUser} from '../actions/userActions.js'


class UserForm extends Component {
  render() {

    const renderForm = () => {
      if ( this.props.match.path === "/login"){
          return (<UserLogin loginUser={this.props.loginUser}/>)
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

export default connect(null, mapDispatchToProps)(UserForm)
