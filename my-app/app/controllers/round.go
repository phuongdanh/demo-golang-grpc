package controllers

import (
	"github.com/revel/revel"
	"context"
	"fmt"
	// "log"

	"google.golang.org/grpc"
	"google.golang.org/grpc/metadata"
	round "my-app/app/protos/round"
)

type Round struct {
	*revel.Controller
}

func (c Round) Index() revel.Result {
	conn, err := grpc.Dial("localhost:50051", grpc.WithInsecure())
	var connectionStatus string
	if err != nil {
		connectionStatus = "Connnection failed"
		fmt.Println(err)
	} else {
		roundClient := round.NewRoundServiceClient(conn)
		header := metadata.New(map[string]string{
			"authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDAyNTEzNjAsImRhdGEiOnsiZW1haWwiOiJ0dXBodW9uZ2RhbmgxOTk2QGdtYWlsLmNvbSIsImV4cCI6MTYwMDMxMTMwMCwiaWQiOjEsIm5hbWUiOiJU4burIFBoxrDGoW5nIERhbmgiLCJyb2xlIjoiYWRtaW4ifX0.IY9crnZOxIxtaeeH3fVLh4ZTwIGPiA5y9qA3spOLN38", 
			"space":  "", 
			"org": "", 
			"limit": "", 
			"offset": "",
		})
		ctx := metadata.NewOutgoingContext(context.Background(), header)
		response, err := roundClient.List(ctx, &round.ListRoundRequest{})
		if err != nil {
			fmt.Println(err.Error())
			connectionStatus = "Connnection failed"
		} else {
			connectionStatus = "Connnection successful"
		}
		return c.Render(connectionStatus, response)
	}
	response := "Fail"
	return c.Render(connectionStatus,response)
	
}
