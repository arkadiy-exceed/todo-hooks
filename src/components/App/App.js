// import { useState } from 'react';
import Auth from '../Auth/Auth';
import Regist from '../Regist/Regist';
import TaskWrapper from '../TaskWrapper/TaskWrapper';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

function App() {

  

  return (
    <div className="App">
      <nav>
        <Link className='App__link' to='/'>Home</Link>
        <Link className='App__link' to='/login'>Sign in</Link>
        <Link className='App__link' to='/regist'>Sign up</Link>
      </nav>

      <Switch>
        <Route exact path='/'>
          <TaskWrapper/>
        </Route>

        <Route exact path='/login'>
          <Auth/>
        </Route>

        <Route exact path='/regist'>
          <Regist/>
        </Route>
      </Switch>

    </div>
  );
}

export default App;
