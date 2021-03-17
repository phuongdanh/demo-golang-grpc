package controllers

import (
	"github.com/revel/revel"
	"context"
	"fmt"
	"google.golang.org/grpc"
	pb "frontend-go/app/protos"
)

type Round struct {
	*revel.Controller
}

func (c Round) Index() revel.Result {
	conn, err := grpc.Dial("0.0.0.0:50052", grpc.WithInsecure())
	var connectionStatus string
	if err != nil {
		connectionStatus = "Connnection failed"
		fmt.Println(err)
	} else {
		roundClient := pb.NewRoundServiceClient(conn)
		response, err := roundClient.List(context.Background(), &pb.ListRoundRequest{})
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
