package system

import (
	"log"
	"net"
	"google.golang.org/grpc"
	pb "question.app/demo/protos"
	"question.app/demo/modules/level"
	"question.app/demo/modules/auth"
	"question.app/demo/modules/round"
	interceptor "question.app/demo/support/auth"
)

func Register(lis net.Listener) {
	s := grpc.NewServer(grpc.UnaryInterceptor(interceptor.UnaryServerInterceptor))
	pb.RegisterLevelServiceServer(s, &level.Controller{})
	pb.RegisterAuthServiceServer(s, &auth.Controller{})
	pb.RegisterRoundServiceServer(s, &round.Controller{})
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}