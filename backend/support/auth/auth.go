package auth

import (
	"context"
	"strings"
	"google.golang.org/grpc"
	"google.golang.org/grpc/metadata"
	"google.golang.org/grpc/status"
	"google.golang.org/grpc/codes"
	"question.app/demo/support/jwt"
	"question.app/demo/system/config"
)

func UnaryServerInterceptor(ctx context.Context, req interface{}, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (interface{}, error) {
	for _, r := range config.Routes {
		if info.FullMethod == r.Name {
			if r.IsAuth {
				return authorize(ctx, req, handler)
			}
			return handler(ctx, req)
		}
	}
	return handler(ctx, req)
}

func authorize(ctx context.Context, req interface{}, handler grpc.UnaryHandler) (interface{}, error) {
	if err := isValidAuthorize(ctx); err != nil {
		return nil, err
	}
	return handler(ctx, req)
}

func isValidAuthorize(ctx context.Context) error {
	md, ok := metadata.FromIncomingContext(ctx)
	if !ok {
		return status.Errorf(codes.InvalidArgument, "Retrieving metadata is failed")
	}

	authHeader, ok := md["authorization"]
	if !ok {
		return status.Errorf(codes.Unauthenticated, "Authorization token is not supplied")
	}
	authorization := strings.Split(authHeader[0], "Bearer ")
	if len(authorization) < 2 {
		return status.Errorf(codes.Unauthenticated, "Token is required") 
	}
	token := authorization[1]
	if _, err := jwt.Exact(token); err != nil  {
		return status.Errorf(codes.Unauthenticated, err.Error())
	}
	return nil
}