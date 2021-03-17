import React from "react"
import "../asset/css/pages/home.css"
import { Link } from "react-router-dom";

function Home({isLoading, user, error, logout}) {
  if (isLoading) {
    return <div className="page_home"><h1>Loading...</h1></div>
  }
  if (error !== "") {
    return (
      <div className="page_home">
        <h1>Fetching data failed</h1>
        <h3>Reason: {error}</h3>
        <Link to="/login" className="btn btn-default">Back to login</Link>
      </div>
    );
  }
  return (
    <div className="page_home">
      <h1>Welcome on the board</h1>
      <div className="card" style={{width: "400px"}}>
        <img className="card-img-top" src="https://www.w3schools.com/bootstrap4/img_avatar1.png" alt="Avatar" style={{ width:"100%"}}/>
        <div className="card-body">
          <h4 className="card-title">{user.name}</h4>
          <p className="card-text">{user.about}</p>
          <div className="pull-right"><span onClick={logout} className="btn btn-secondary">Logout</span></div>
        </div>
      </div>
    </div>
  );
}

export default Home