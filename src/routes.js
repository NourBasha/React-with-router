import React , {Component} from 'react';
import Component1 from './component/functional/component1';

import Container1 from './component/container/container1';
import Header from './component/container/header';

import {Router, Switch, Route} from 'react-router';
import history from './utils/history';

class Routes extends Component {
    render(){
        return(
            <div>
                <Router history={history}>
                   <div>
                        <Header />
                         <Switch>       
                            <Route exact path='/'       render={() => <Container1 /> } />
                            <Route path='/component/:id'   render={(props) => <Component1 {...props}/> } />
                        </Switch>
                   </div>
                </Router>
            </div>
        )
    }
}
export default Routes;