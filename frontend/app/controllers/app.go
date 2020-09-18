package controllers

import (
	"log"
	"github.com/revel/revel"
	"my-app/app/services/level"
)

type App struct {
	*revel.Controller
}



const (
	address     = "localhost:50051"
	defaultName = "world"
)

func (c App) Index() revel.Result {
	levels, err := (&level.Action{}).List()
	if err != nil {
		log.Printf("Failed: %v", err)
	}
	return c.Render(levels)
}
