package system

import (
	"log"
	"net"
	"google.golang.org/grpc"
	pbLevel "question.app/demo/protos/level"
	pbRound"question.app/demo/protos/round"
	"question.app/demo/modules/level"
	"question.app/demo/modules/round"
	"question.app/demo/support/auth"
)

func Register(lis net.Listener) {
	s := grpc.NewServer(grpc.UnaryInterceptor(auth.UnaryServerInterceptor))
	pbLevel.RegisterLevelServiceServer(s, &level.Controller{})
	pbRound.RegisterRoundServiceServer(s, &round.Controller{})
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}