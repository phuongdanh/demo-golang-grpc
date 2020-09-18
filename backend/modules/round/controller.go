package round
import (
	"fmt"
	"context"
	"google.golang.org/grpc/metadata"
	pb "question.app/demo/protos"
)

type Controller struct {
	pb.UnimplementedRoundServiceServer
}

func (*Controller) List(ctx context.Context, request *pb.ListRoundRequest) (*pb.ListRoundResponse, error) {
	header, _ := metadata.FromIncomingContext(ctx)
	fmt.Println(header["authorization"])
	return &pb.ListRoundResponse{
		Items: []*pb.RoundMessage{
			&pb.RoundMessage{
				Name: "Tu Phuong Danh",
				Score: 10,
			},
		},
	}, nil
}