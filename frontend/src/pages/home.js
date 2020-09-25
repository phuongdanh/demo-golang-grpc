import React, { useState, useEffect, useContext } from "react"
import HomeComponent from "../components/Home"
import { store } from '../store/store.js'
import Config from "../utils/config"
import CookieHelper from "../utils/cookieHelper"
import { Redirect } from "react-router-dom"
const {UserServiceClient} = require('../protos/user_service_grpc_web_pb.js')
require("../protos/user_service_pb.js")
require("../protos/user_message_pb.js")

/* eslint-disable */
function Home() {
  const globalState = useContext(store)
  const { dispatch } = globalState
  const [isLoading, setIsLoading] = useState(true)
  const [userObject, setUserObject] = useState({})
  const [error, setError] = useState("")
  const [redirect, setRedirect] = useState(null)

  var userService = new UserServiceClient(Config.API_URL)
  var request = new proto.protos.GetUserRequest()
  request.setId(1)
  var metadata = {
    "Authorization": "Bearer " + globalState.accessToken
  };

  useEffect(() => {
    if (isLoading) {
      userService.get(request, metadata, function(err, response) {
        if (err) {
          setError(err.message)
        } else {
          setUserObject({
            "name": response.getItem().getName(),
            "email": response.getItem().getEmail(),
            "about": response.getItem().getAbout(),
            "avatar": response.getItem().getAvatar(),
          })
        }
        setIsLoading(false)
      });
    }
  })

  const logout = (e) => {
    e.preventDefault()
    const cookieHelper = new CookieHelper()
    cookieHelper.SetValue("accessToken", "")
    dispatch({type: "LOGOUT"})
    setRedirect("/login")
  }
  if (redirect !== null) {
    return <Redirect to={redirect}/>
  }
  return (
    <HomeComponent isLoading={isLoading} user={userObject} error={error} logout={logout}/>
  );
}

export default Home