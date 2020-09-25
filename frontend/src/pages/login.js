import React, { useState, useContext } from "react"
import "../asset/css/pages/login.css"
import LoginComponent from "../components/Login"
import { Redirect } from 'react-router-dom'
import { store } from '../store/store.js'
import CookieHelper from "../utils/cookieHelper"
import Config from "../utils/config"
const {AuthServiceClient} = require('../protos/auth_service_grpc_web_pb.js')
require("../protos/auth_service_pb.js")
require("../protos/auth_message_pb.js")

/* eslint-disable */
function Login() {
  const globalState = useContext(store)
  const { dispatch } = globalState
  const [email, setEmail] = useState("demo@gmail.com")
  const [password, setPassword] = useState("abc@1234")
  const [redirect, setRedirect] = useState(null)
  const [error, setError] = useState("")

  const inputOnChange = (name, value) => {
    setError("")
    if (name === "email") {
      setEmail(value)
    }
    if (name === "password") {
      setPassword(value)
    }
  }

  function onSubmit (e) {
    e.preventDefault();
    var authService = new AuthServiceClient(Config.API_URL)
    var request = new proto.protos.LoginRequest()
    request.setEmail(email)
    request.setPassword(password)
    var metadata = {};
    authService.login(request, metadata, function(err, response) {
      if (err) {
        setError(err.message)
      } else {
        const cookieHelper = new CookieHelper()
        cookieHelper.SetValue("accessToken", response.getAccesstoken())
        dispatch({ type: 'LOGIN', accessToken: response.getAccesstoken() })
        setRedirect("/")
      }
    });
    
  }

  if (redirect !== null) {
    return <Redirect to={redirect}/>
  }
  return <LoginComponent
          email={email}
          password={password}
          onChange={inputOnChange}
          onSubmit={onSubmit}
          error={error}
        />
      
}

export default Login