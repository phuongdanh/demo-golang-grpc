package controllers

import (
	"log"
	"github.com/revel/revel"
	"my-app/app/services/level"
	pb "my-app/app/protos"
	"strconv"
)

type App struct {
	*revel.Controller
}

func (c App) Index() revel.Result {
	levels, err := (&level.Action{}).List()
	if err != nil {
		log.Printf("Failed: %v", err)
	}
	return c.Render(levels)
}

func (c App) Create() revel.Result {
	return c.Render()
}

func (c App) DoCreate() revel.Result {
	name := c.Params.Form.Get("name")
	defaultScoreStr := c.Params.Form.Get("default_score")
	var defaultScore float32
	if s, err := strconv.ParseFloat(defaultScoreStr, 32); err == nil {
    defaultScore = float32(s)
	}
	rect := &pb.CreateLevelRequest{
		Name: name,
		DefaultScore: defaultScore,
	}
	_, err := (&level.Action{}).Create(rect)
	c.ViewArgs["IsPost"] = true
	if err != nil {
		log.Printf("Fail to create: %v", err.Error())
		return c.RenderTemplate("App/Create.html")
	}
	return c.Redirect(App.Index)
}