package controllers

import (
	"github.com/revel/revel"
	"context"
	"fmt"
	"log"
	"time"
	"os"

	"google.golang.org/grpc"
	level "my-app/app/protos/level"
	"google.golang.org/grpc/metadata"
)

type App struct {
	*revel.Controller
}



const (
	address     = "localhost:50051"
	defaultName = "world"
)

func getListLevel(client level.LevelServiceClient, rect *level.ListLevelRequest) ([]*level.LevelMessage) {
	header := metadata.New(map[string]string{
		"authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDAyNTEzNjAsImRhdGEiOnsiZW1haWwiOiJ0dXBodW9uZ2RhbmgxOTk2QGdtYWlsLmNvbSIsImV4cCI6MTYwMDMxMTMwMCwiaWQiOjEsIm5hbWUiOiJU4burIFBoxrDGoW5nIERhbmgiLCJyb2xlIjoiYWRtaW4ifX0.IY9crnZOxIxtaeeH3fVLh4ZTwIGPiA5y9qA3spOLN38", 
		"space":  "", 
		"org": "", 
		"limit": "", 
		"offset": "",
	})
	ctx := metadata.NewOutgoingContext(context.Background(), header)
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
	serverUrl := os.Getenv("SERVER_URL")
	conn, err := grpc.Dial(address, grpc.WithInsecure(), grpc.WithBlock())
	if err != nil {
		fmt.Printf("did not connect: %v", err)
	}
	defer conn.Close()
	client := level.NewLevelServiceClient(conn)
	levels := getListLevel(client, &level.ListLevelRequest{})
	getOneLevel(client, &level.GetLevelRequest{Id: 1})
	return c.Render(levels, serverUrl)
}
