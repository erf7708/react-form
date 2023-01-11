import React from 'react';
import Login from './Components/Login';
import Singup from './Components/Singup';
import { Route,Switch,Redirect } from 'react-router-dom';

function App(props) {
    return (
        <div>

            <Switch>
                <Route path='/singup'  component={Singup} />
                <Route path='/login' component={Login}/>
                <Redirect from='/' to='/singup'/>
            </Switch>
            {/* <Singup/> */}

          
        </div>
    );
}

export default App;