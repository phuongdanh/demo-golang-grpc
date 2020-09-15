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
		connectionStatus = "Connnection successful"
		roundClient := round.NewRoundServiceClient(conn)
		header := metadata.New(map[string]string{"authorization": "tokend", "space":  "", "org": "", "limit": "", "offset": ""})
		ctx := metadata.NewOutgoingContext(context.Background(), header)
		response, err := roundClient.List(ctx, &round.ListRoundRequest{})
		if err != nil {
			fmt.Println(err.Error())
		}
		return c.Render(connectionStatus, response)
	}
	response := "Fail"
	return c.Render(connectionStatus,response)
	
}
