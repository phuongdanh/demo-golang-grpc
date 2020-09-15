package services
import (
	"context"
	round "my-app/app/protos/round"
	"google.golang.org/grpc"
)

func NewRoundClient(cc grpc.ClientConnInterface) round.RoundServiceClient {
	return roundClient{cc}
}

type roundClient struct {
	cc grpc.ClientConnInterface
}

func (this roundClient) List() {

}

func (this roundClient) Get() {
	
}


func (this roundClient) Create(ctx context.Context, request *round.CreateRoundRequest, options ...grpc.CallOption) {
	
}



func (this roundClient) Update() {
	
}


func (this roundClient) Delete() {
	
}
