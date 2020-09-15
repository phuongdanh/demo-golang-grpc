package round
import (
	"fmt"
	"context"
	"google.golang.org/grpc/metadata"
	pbRound "question.app/demo/protos/round"
)

type Controller struct {
	pbRound.UnimplementedRoundServiceServer
}

func (*Controller) List(ctx context.Context, request *pbRound.ListRoundRequest) (*pbRound.ListRoundResponse, error) {
	header, _ := metadata.FromIncomingContext(ctx)
	fmt.Println(header["authorization"])
	return &pbRound.ListRoundResponse{
		Items: []*pbRound.RoundMessage{
			&pbRound.RoundMessage{
				Name: "Tu Phuong Danh",
				Score: 10,
			},
		},
	}, nil
}