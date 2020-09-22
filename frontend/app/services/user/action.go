package user
import (
	"log"
	"fmt"
	"os"
	"io"
	"frontend/app/services"
	pb "frontend/app/protos"
	"frontend/app/utils"
)

type Action struct {}

func (this Action) UploadAvatar () (map[string]interface{}, error) {
	f := "./public/img/avatar_files/cbabc8b3-e0bb-4b14-bbe1-1c6cd985b557(1).jpg"
	file, err := os.Open(f)
	defer file.Close()
	if err != nil {
		fmt.Println(err)
		return nil, err
	}
	client := (&services.Client{}).User()
	stream, err := client.Upload(utils.ContextRequest())
	log.Println("Start uploading")
	buf := make([]byte, 10)
	
	for {
		n, err := file.Read(buf)
		if err != nil {
			if err != io.EOF {
				fmt.Println(err)
			}
			break
		}

		stream.Send(&pb.UploadUserAvatarRequest{
			Image: buf[:n],
		})
	}
	log.Println("End uploading")
	response, err := stream.CloseAndRecv()
	if err != nil {
		return nil, fmt.Errorf("Failed: %v", err.Error())
	}
	return map[string]interface{}{"url": response.GetUrl()}, nil
}