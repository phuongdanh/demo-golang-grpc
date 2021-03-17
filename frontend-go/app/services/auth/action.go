package auth
import (
	"fmt"
	"context"
	"frontend-go/app/services"
	pb "frontend-go/app/protos"
)

type Action struct {}

func (this Action) Login (email string, password string) (map[string]interface{}, error) {
	client := (&services.Client{}).Auth()
	request := &pb.LoginRequest{
		Email: email,
		Password: password,
	}
	response, err := client.Login(context.Background(), request)
	if err != nil {
		return nil, fmt.Errorf("Failed: %v", err.Error())
	}
	user := response.GetUser()
	return map[string]interface{}{
		"token": response.GetAccessToken(),
		"user": map[string]interface{}{
			"id": user.GetId(),
			"name": user.GetName(),
			"email": user.GetEmail(),
			"created_at": user.GetCreatedAt(),
		},
	}, nil
}