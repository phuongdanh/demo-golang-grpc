package main

import (
	"log"
	"net"
	"fmt"
	"context"
	
	"google.golang.org/grpc"
	"google.golang.org/grpc/metadata"
	"google.golang.org/grpc/status"
	"google.golang.org/grpc/codes"
	pbLevel "question.app/demo/protos/level"
	pbRound "question.app/demo/protos/round"
	"question.app/demo/modules/level"
	"question.app/demo/modules/round"
)

const (
	port = "localhost:50051"
)

func unaryServerInterceptor(ctx context.Context, req interface{}, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (interface{}, error) {
	if info.FullMethod == "/round.RoundService/List" {
		if err := authorize(ctx); err != nil {
			return nil, err
		}
	}

	// Calls the handler
	h, err := handler(ctx, req)
	return h, err
}

func authorize(ctx context.Context) error {
	md, ok := metadata.FromIncomingContext(ctx)
	if !ok {
		return status.Errorf(codes.InvalidArgument, "Retrieving metadata is failed")
	}

	authHeader, ok := md["authorization"]
	if !ok {
		return status.Errorf(codes.Unauthenticated, "Authorization token is not supplied")
	}

	token := authHeader[0]
	// validateToken function validates the token
	if token != "token" {
		return status.Errorf(codes.Unauthenticated, "Invalid token")
	}
	return nil
}

func main() {
	fmt.Printf("Starting server \n")
	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	} else {
		fmt.Printf("Server running at: %v \n", port)
	}
	s := grpc.NewServer(grpc.UnaryInterceptor(unaryServerInterceptor))
	pbLevel.RegisterLevelServiceServer(s, &level.Controller{})
	pbRound.RegisterRoundServiceServer(s, &round.Controller{})
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
