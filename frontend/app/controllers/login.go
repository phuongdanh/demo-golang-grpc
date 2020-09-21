
package controllers

import (
	"log"
	"github.com/revel/revel"
	"my-app/app/services/auth"
)

type Login struct {
	*revel.Controller
}

func (c Login) Index() revel.Result {
	return c.Render()
}

func (c Login) DoLogin() revel.Result {
	email := c.Params.Form.Get("email")
	password := c.Params.Form.Get("password")
	response, err := auth.Action{}.Login(email, password)
	c.ViewArgs["IsPost"] = true
	if err != nil {
		log.Printf("Fail to login: %v", err.Error())
		return c.RenderTemplate("Login/Index.html")
	}
	c.ViewArgs["Token"] = response["token"]
	return c.RenderTemplate("Login/Index.html")
}