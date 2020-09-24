package services

import (
	"log"
	"google.golang.org/grpc"
	pb "frontend-go/app/protos"
)

const (
	address     = "localhost:9090"
)

type Client struct {}

func (this *Client) Connection() grpc.ClientConnInterface {
	conn, err := grpc.Dial(address, grpc.WithInsecure(), grpc.WithBlock())
	if err != nil {
		log.Println("connect fail")
		panic("Can not connect rpc server")
	} else {
		log.Println("connect ok")
	}
	return conn
}

func (this *Client) Auth() pb.AuthServiceClient {
	conn, err := grpc.Dial(address, grpc.WithInsecure(), grpc.WithBlock())
	if err != nil {
		log.Println("connect fail")
		panic("Can not connect rpc server")
	} else {
		log.Println("connect ok")
	}
	client := pb.NewAuthServiceClient(conn)
	return client
}


func (this *Client) Level() pb.LevelServiceClient {
	conn, err := grpc.Dial(address, grpc.WithInsecure(), grpc.WithBlock())
	if err != nil {
		panic("Can not connect rpc server")
	}
	client := pb.NewLevelServiceClient(conn)
	return client
}

func (this *Client) User() pb.UserServiceClient {
	conn, err := grpc.Dial(address, grpc.WithInsecure(), grpc.WithBlock())
	if err != nil {
		panic("Can not connect rpc server")
	}
	client := pb.NewUserServiceClient(conn)
	return client
}


func (this *Client) Round() pb.RoundServiceClient {
	conn, err := grpc.Dial(address, grpc.WithInsecure(), grpc.WithBlock())
	if err != nil {
		panic("Can not connect rpc server")
	}
	client := pb.NewRoundServiceClient(conn)
	return client
}