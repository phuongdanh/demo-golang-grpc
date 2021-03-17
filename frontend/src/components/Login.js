import React from "react"
import "../asset/css/pages/login.css"

function Login({ email, password, onChange, onSubmit, error }) {

  return (
    <div className="page_login">
      <form onSubmit={ onSubmit }>
        <h1>Form Login</h1>
        <div className="form-group">
        { error !== "" && <div className="alert alert-danger">{error}</div> }
          <label>Email address</label>
          <input 
            value={ email }
            name="email"
            onChange={(e) => onChange(e.target.name ,e.target.value)} 
            type="email" 
            className="form-control" 
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            value={ password }
            name="password"
            onChange={(e) => onChange(e.target.name, e.target.value)} 
            type="password" 
            className="form-control" 
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Login