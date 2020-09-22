package user

import (
	"io"
	"bytes"
	pb "question.app/demo/protos"
	"fmt"
	"log"
)

type Controller struct {
	pb.UnimplementedUserServiceServer
}

func (*Controller) Upload(stream pb.UserService_UploadServer) error  {
	maxImageSize := 10000
	imageData := bytes.Buffer{}
	imageSize := 0
	for {
		req, err := stream.Recv()
		if err == io.EOF {
			goto END
		}
		if err != nil {
			return err
		}
		chunk := req.GetImage()
		size := len(chunk)
		
		log.Printf("received a chunk with size: %d", size)

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
	url, err := (&Service{}).SaveFile("avatar.png", imageData)
	if err != nil {
		return fmt.Errorf( "Can not save the data: %v", err)
	}
	err = stream.SendAndClose(&pb.UploadUserAvatarResponse{
		Url: *url,
	})
	if err != nil {
		return fmt.Errorf( "cannot response data: %v", err)
	}
	return nil
}
