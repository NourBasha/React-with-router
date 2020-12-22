import React , {Component} from 'react';

import Component1 from './component/functional/component1';
import Container1 from './component/container/container1';
import  Callback from "./component/functional/callback";
import AuthCheck from './utils/auchcheck';
import Header from './component/container/header';

import {Router, Switch, Route, Redirect} from 'react-router';
import history from './utils/history';
import Auth from './utils/auth';
import ProtectedRoute from './component/functional/protectedroute';
import UnAuthRedirect from './component/functional/unauthredirect';

export const auth = new Auth();

const handelAuthentication = (props) => {
    if(props.location.hash){
        auth.handleAuth();
    }
}

const PrivateRoute = ({comp: Component, auth}) => (
    
    
    <Route render={ props => auth.isAuthenticated() ===true
        ? < Component  auth={auth} {...props} />
        : < Redirect  to={{pathname:'/redirect'}}/>
    } 
    />
)

class Routes extends Component {
    render(){
        return(
            <div>
                <Router history={history}>
                   <div>
                        <Header />
                         <Switch>       
                            <Route exact path='/'       render={() => <Container1 auth={auth} /> } />
                            <Route path='/authcheck' render={ () => <AuthCheck auth={auth}/>} />
                            <Route path='/redirect' component={UnAuthRedirect} />
                            <Route path="/callback"  render={(props) => { handelAuthentication(props); return <Callback/> }  } />
                            <Route path='/component/:id'   render={(props) => <Component1 {...props}/> } />
                           
                            <PrivateRoute path='/privateroute' auth={auth} comp={ProtectedRoute} />
                        </Switch>
                   </div>
                </Router>
            </div>
        )
    }
}
export default Routes;