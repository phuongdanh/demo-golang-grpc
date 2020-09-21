package auth

import (
	"context"
	pb "question.app/demo/protos"
	"question.app/demo/support/jwt"
)

type loginErr struct {
	message string
}

func (this loginErr) Error() string {
	return this.message
}

type Controller struct {
	pb.UnimplementedAuthServiceServer
}

func (*Controller) Login(ctx context.Context, request *pb.LoginRequest) (*pb.LoginResponse, error)  {
	input := Model{
		request.GetEmail(), 
		request.GetPassword(),
	}
	item, err := Service.Login(Service{}, input)
	if err != nil {
		return nil, err
	}
	accessToken := jwt.Create(item.ToMap())
	return &pb.LoginResponse{
		AccessToken: accessToken,
		RefreshToken: "refresh-token",
		User: item.ToMessage(),
	}, nil
}
