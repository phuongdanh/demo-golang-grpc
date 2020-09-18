package level


import (
	"context"
	// "fmt"
	// "io"
	"log"
	pb "question.app/demo/protos"
)

var xampleLevel pb.LevelMessage = pb.LevelMessage{
	Id: 1,
	Name: "Level 1",
	DefaultScore: 10.0,
}

type Controller struct {
	pb.UnimplementedLevelServiceServer
}

func (s *Controller) List(ctx context.Context, in *pb.ListLevelRequest) (*pb.ListLevelResponse, error) {
	log.Println("Server received request to get list of levels")
	var levelMessages []*pb.LevelMessage
	service := Service{}
	items := service.List()
	for _, item := range items {
		levelMessages = append(levelMessages, item.ToMessage())
	}
	return &pb.ListLevelResponse{Items: levelMessages}, nil
}

func (s *Controller) Get(ctx context.Context, in *pb.GetLevelRequest) (*pb.GetLevelResponse, error) {
	log.Printf("Server received request to get level at #%v", in.GetId())
	return &pb.GetLevelResponse{
		Item: &xampleLevel,
	}, nil
}