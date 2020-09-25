package user

import (
	"io"
	"bytes"
	pb "question.app/demo/protos"
	"google.golang.org/grpc/status"
	"google.golang.org/grpc/codes"
	"fmt"
	"context"
)

type Controller struct {
	pb.UnimplementedUserServiceServer
}


func (s *Controller) Get(ctx context.Context, in *pb.GetUserRequest) (*pb.GetUserResponse, error) {
	item, err := (&Service{}).Get(in.GetId())
	if err != nil {
		newErr := status.Errorf(codes.InvalidArgument, "Invalid argument")
		return nil, newErr
	}
	return &pb.GetUserResponse{
		Item: item.ToMessage(),
	}, nil
}

func (*Controller) Upload(stream pb.UserService_UploadServer) error  {
	maxImageSize := 10000
	imageData := bytes.Buffer{}
	imageSize := 0
	var id int32;
	for {
		req, err := stream.Recv()
		if err == io.EOF {
			goto END
		}
		if err != nil {
			return err
		}
		id = req.GetId()
		chunk := req.GetImage()
		size := len(chunk)
		imageSize += size
		if imageSize > maxImageSize {
			return fmt.Errorf("image is too large: %d > %d", imageSize, maxImageSize)
		}
		_, err = imageData.Write(chunk)
		if err != nil {
			return fmt.Errorf( "cannot write chunk data: %v", err)
		}
	}
	END:
	fileName := "avatar_"+fmt.Sprint(id)+".png"
	url, err := (&Service{}).SaveFile("./storage/uploads/"+fileName, imageData)
	if err != nil {
		return fmt.Errorf( "Can not save the data: %v", err)
	}
	if _, saveErr := (&Service{}).Update(id, map[string]interface{}{"avatar": fileName}); saveErr != nil {
		return fmt.Errorf( "Save failed: %v", saveErr)
	}
	err = stream.SendAndClose(&pb.UploadUserAvatarResponse{
		Url: *url,
	})
	if err != nil {
		return fmt.Errorf( "cannot response data: %v", err)
	}
	return nil
}
