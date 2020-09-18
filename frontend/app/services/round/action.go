package round
import (
	"context"
	pb "my-app/app/protos"
	"google.golang.org/grpc"
)

func NewRoundClient(cc grpc.ClientConnInterface) {
	// return roundClient{cc}
}

type roundClient struct {
	cc grpc.ClientConnInterface
}

func (this roundClient) List() {

}

func (this roundClient) Get() {
	
}


func (this roundClient) Create(ctx context.Context, request *pb.CreateRoundRequest, options ...grpc.CallOption) {
	
}



func (this roundClient) Update() {
	
}


func (this roundClient) Delete() {
	
}
