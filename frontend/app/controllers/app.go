package controllers

import (
	"fmt"
	"log"
	"github.com/revel/revel"
	"frontend/app/services/level"
	"frontend/app/services/user"
	pb "frontend/app/protos"
	"strconv"
	"google.golang.org/grpc/status"
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

func (c App) Delete() revel.Result {
	id := c.Params.Route.Get("id")
	idInt, er := strconv.ParseInt(id, 10, 32)
	if er != nil {
		c.Flash.Error(er.Error())
	} else {
		err := (&level.Action{}).Delete(int32(idInt))
		if err != nil {
			st, ok := status.FromError(err)
			if !ok {
				c.Flash.Error("System failed")
			} else {
				errorString := fmt.Sprintf("Failed: (%v) %v", st.Code(), st.Message())
				c.Flash.Error(errorString)
			}
			
		} else {
			c.Flash.Success("Deleted the item!")
		}
	}
	return c.Redirect(App.Index)
}

func (c App) UploadAvatar() revel.Result {
	response, err := (&user.Action{}).UploadAvatar()
	data := make(map[string]interface{})
	if err != nil {
		data["status"] = "failed"
		data["message"] = err.Error()
	} else {
		data["status"] = "successed"
		data["message"] = response["url"]
	}
	return c.RenderJSON(data)
}