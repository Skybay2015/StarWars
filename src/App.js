import Main from './Pages/Main';
import 'semantic-ui-css/semantic.min.css';
import {
   Switch,
   BrowserRouter as Router,
   Route,
   Redirect,
} from 'react-router-dom';
import Login from './Pages/Login';
import { useState } from 'react';
import Logout from './Pages/Logout';

function App() {
   const [isLoggedIn, setisLoggedIn] = useState(false);
   return (
      <div style={{ minHeight: '100vh' }} className='App'>
         <Router>
            <Switch>
               <Route
                  path='/login'
                  component={() => <Login isLoggedIn={setisLoggedIn} />}
               />
               <Route
                  path='/logout'
                  component={() => <Logout isLoggedIn={setisLoggedIn} />}
               />
               {isLoggedIn && <Route exact path='/' component={Main} />}
               <Redirect to='/login' />
            </Switch>
         </Router>
      </div>
   );
}

export default App;
