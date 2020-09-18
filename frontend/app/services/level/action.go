package level

import (
	"log"
	"context"
	"time"
	pb "my-app/app/protos"
	"my-app/app/services"
	"google.golang.org/grpc/metadata"
)
type Action struct {

}

func client() pb.LevelServiceClient {
	client := services.Client{}
	return client.Level()
}

func (this *Action) List() ([]*pb.LevelMessage, error) {
	header := metadata.New(map[string]string{
		"authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDAyNTEzNjAsImRhdGEiOnsiZW1haWwiOiJ0dXBodW9uZ2RhbmgxOTk2QGdtYWlsLmNvbSIsImV4cCI6MTYwMDMxMTMwMCwiaWQiOjEsIm5hbWUiOiJU4burIFBoxrDGoW5nIERhbmgiLCJyb2xlIjoiYWRtaW4ifX0.IY9crnZOxIxtaeeH3fVLh4ZTwIGPiA5y9qA3spOLN38", 
		"space":  "", 
		"org": "", 
		"limit": "", 
		"offset": "",
	})
	ctx := metadata.NewOutgoingContext(context.Background(), header)
	client := services.Client{}
	res, err := client.Level().List(ctx, &pb.ListLevelRequest{})
	if err != nil {
		log.Printf("Could not get list of level, %v", err)
		return nil, err
	}
	return res.GetItems(), nil
}

func (this *Action) Get(rect *pb.GetLevelRequest) (*pb.LevelMessage, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	res, err := client().Get(ctx, rect)
	if err != nil {
		return nil, err
	}
	return res.GetItem(), nil
}