import React, {useContext, useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from "./PrivateRoute"
import PublicRoute from "./PublicRoute"
import Login from '../pages/login'
import Home from '../pages/home'
import { store } from '../store/store.js'
import CookieHelper from '../utils/cookieHelper'

export default function AppRoute() {

  const globalState = useContext(store)
  const [isIniting, setIsIniting] = useState(true)
  const [authed, setAuthened] = useState(false)
  const cookieHelper = new CookieHelper()
  useEffect(() => {
    if (cookieHelper.GetValue("accessToken") !== "") {
      setAuthened(true)
      if (cookieHelper.GetValue("accessToken") !== globalState.accessToken ) {
        globalState.accessToken = cookieHelper.GetValue("accessToken")
      }
    }
    setIsIniting(false)
  }, [cookieHelper, globalState.accessToken])
  
  if (isIniting) {
    return <div><h1>Loading ...</h1></div>
  }
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute path='/login' component={Login} />
          <PrivateRoute path='/' component={Home} authed={authed} />
        </Switch>
      </div>
    </Router>
  );
}