package controllers

import (
	"github.com/revel/revel"
	"context"
	"fmt"
	"log"
	"time"

	"google.golang.org/grpc"
	level "my-app/app/protos/level"
)

type App struct {
	*revel.Controller
}



const (
	address     = "localhost:50051"
	defaultName = "world"
)

func getListLevel(client level.LevelServiceClient, rect *level.ListLevelRequest) ([]*level.LevelMessage) {
	ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()
	r, err := client.List(ctx, rect)
	if err != nil {
		fmt.Printf("could not get list: %v", err)
	}
	return r.GetLevels()
}

func getOneLevel(client level.LevelServiceClient, rect *level.GetLevelRequest) {
	log.Printf("Looking for features within %v", rect)
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	r, err := client.Get(ctx, rect)
	if err != nil {
		fmt.Printf("could not get one: %v", err)
	}
	log.Printf("One level: %v", r.GetLevel())
}

func (c App) Index() revel.Result {
	conn, err := grpc.Dial(address, grpc.WithInsecure(), grpc.WithBlock())
	if err != nil {
		fmt.Printf("did not connect: %v", err)
	}
	defer conn.Close()
	client := level.NewLevelServiceClient(conn)
	levels := getListLevel(client, &level.ListLevelRequest{})
	getOneLevel(client, &level.GetLevelRequest{Id: 1})
	return c.Render(levels)
}
