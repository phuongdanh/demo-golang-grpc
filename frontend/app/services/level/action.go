package level

import (
	"log"
	pb "frontend/app/protos"
	"frontend/app/services"
	"frontend/app/utils"
	"google.golang.org/grpc/status"
)
type Action struct {

}

func client() pb.LevelServiceClient {
	client := services.Client{}
	return client.Level()
}

func (this *Action) List() ([]*pb.LevelMessage, error) {
	client := services.Client{}
	res, err := client.Level().List(utils.ContextRequest(), &pb.ListLevelRequest{})
	if err != nil {
		st, ok := status.FromError(err)
		if !ok {
			log.Printf("Uknown error")
		} else {
			log.Printf("Response error with code is %v and message: %v", st.Code(), st.Message())
		}
		return nil, err
	}
	return res.GetItems(), nil
}

func (this *Action) Get(rect *pb.GetLevelRequest) (*pb.LevelMessage, error) {
	res, err := client().Get(utils.ContextRequest(), rect)
	if err != nil {
		return nil, err
	}
	return res.GetItem(), nil
}

func (this *Action) Create(rect *pb.CreateLevelRequest) (*pb.LevelMessage, error) {
	res, err := client().Create(utils.ContextRequest(), rect);
	if err != nil {
		return nil, err
	}
	return res.GetItem(), nil
}

func (this *Action) Delete(id int32) error {
	_, err := client().Delete(utils.ContextRequest(), &pb.DeleteLevelRequest{Id: id})
	if err != nil {
		return err
	}
	return nil
}