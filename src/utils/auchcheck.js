import React , {Component}from 'react';
import * as ACTIONS from '../store/actions/actions';
import history from './history';
import {connect} from 'react-redux';




class AuthCheck extends Component {

    componentDidMount(){
      if(this.props.auth.isAuthenticated()){
        this.props.login(); // dispatch action login success
        history.replace('/');
      }else{
        this.props.logout(); // dispatch action log out
        history.replace('/');
      }
    }

    render(){
        return(
            <div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        
    }
}

function mapDispatchToProps(dispatch){
    return{
        login : () => dispatch(ACTIONS.login_success()),
        logout: () => dispatch(ACTIONS.login_failure())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (AuthCheck);