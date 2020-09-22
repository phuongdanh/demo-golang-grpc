package level


import (
	"context"
	"log"
	pb "question.app/demo/protos"
	"google.golang.org/grpc/status"
	"google.golang.org/grpc/codes"
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

func (s *Controller) Create(ctx context.Context, in *pb.CreateLevelRequest) (*pb.CreateLevelResponse, error) {
	service := Service{}
	item, err := service.Create(Model{Name: in.GetName(), Default_score: in.GetDefaultScore()})
	if err != nil {
		newErr := status.Errorf(codes.InvalidArgument, "Invalid argument")
		return nil, newErr
	}
	return &pb.CreateLevelResponse{
		Item: item.ToMessage(),
	}, nil
}

func (s *Controller) Delete(ctx context.Context, in *pb.DeleteLevelRequest) (*pb.DeleteLevelResponse, error) {
	log.Print("Request delete")
	service := Service{}
	err := service.Delete(in.GetId())
	if err != nil {
		newErr := status.Errorf(codes.InvalidArgument, "Invalid argument")
		return nil, newErr
	}
	return &pb.DeleteLevelResponse{}, nil
}