package controllers

import (
	"github.com/revel/revel"
	"context"
	"fmt"
	// "log"

	"google.golang.org/grpc"
	"google.golang.org/grpc/metadata"
	pb "my-app/app/protos"
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
		roundClient := pb.NewRoundServiceClient(conn)
		header := metadata.New(map[string]string{
			"authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDAzMDc0MDQsImRhdGEiOnsiZW1haWwiOiJ0dXBodW9uZ2RhbmgxOTk2QGdtYWlsLmNvbSIsImV4cCI6MTYwMDM2NzM0NCwiaWQiOjEsIm5hbWUiOiJU4burIFBoxrDGoW5nIERhbmgiLCJyb2xlIjoiYWRtaW4ifX0.-SyXHqU-ctrjPk4L5qWzwp-c2DQ0BH4l1B4lr2rk_Ww", 
			"space":  "", 
			"org": "", 
			"limit": "", 
			"offset": "",
		})
		ctx := metadata.NewOutgoingContext(context.Background(), header)
		response, err := roundClient.List(ctx, &pb.ListRoundRequest{})
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
