import React, { useState } from "react"
import "../asset/css/pages/login.css"
import LoginComponent from "../components/Login"
import { Redirect } from 'react-router-dom';
const {AuthServiceClient} = require('../protos/auth_service_grpc_web_pb.js');
require("../protos/auth_service_pb.js")
require("../protos/auth_message_pb.js")

/* eslint-disable */
function Login() {

  const [email, setEmail] = useState("demo@gmail.com")
  const [password, setPassword] = useState("abc@1234")
  const [redirect, setRedirect] = useState(null)
  const [error, setError] = useState("")

  const inputOnChange = (name, value) => {
    setError("")
    if (name == "email") {
      setEmail(value)
    }
    if (name == "password") {
      setPassword(value)
    }
  }

  function onSubmit (e) {
    e.preventDefault();
    var authService = new AuthServiceClient('http://localhost:50051')
    var request = new proto.protos.LoginRequest()
    request.setEmail(email)
    request.setPassword(password)
    var metadata = {'custom-header-1': 'value1'};
    authService.login(request, metadata, function(err, response) {
      if (err) {
        console.log(err.code);
        setError(err.message)
      } else {
        console.log(response.getAccesstoken());
        console.log(response.getUser().getName());
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