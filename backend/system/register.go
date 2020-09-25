package system

import (
	"log"
	"net"
	"google.golang.org/grpc"
	pb "question.app/demo/protos"
	"question.app/demo/modules/level"
	"question.app/demo/modules/auth"
	"question.app/demo/modules/round"
	"question.app/demo/modules/user"
	interceptor "question.app/demo/support/auth"
)

func Register(lis net.Listener) {
	log.Println("Register ....")
	s := grpc.NewServer(grpc.UnaryInterceptor(interceptor.UnaryServerInterceptor))
	pb.RegisterLevelServiceServer(s, &level.Controller{})
	pb.RegisterAuthServiceServer(s, &auth.Controller{})
	pb.RegisterRoundServiceServer(s, &round.Controller{})
	pb.RegisterUserServiceServer(s, &user.Controller{})
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}