
package controllers

import (
	"github.com/revel/revel"
)

type Page struct {
	*revel.Controller
}

func (c Page) Contact() revel.Result {
	return c.Render()
}

func (c Page) About() revel.Result {
	return c.Render()
}