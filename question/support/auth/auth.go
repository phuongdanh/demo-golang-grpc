package auth

import (
	"context"
	"strings"
	"google.golang.org/grpc"
	"google.golang.org/grpc/metadata"
	"google.golang.org/grpc/status"
	"google.golang.org/grpc/codes"
	"question.app/demo/support/jwt"
)

type route struct {
	name string
	isAuth bool
}

var routes = []route{
	route{"/round.RoundService/List", true},
	route{"/round.RoundService/Get", true},
	route{"/round.RoundService/Create", true},
	route{"/round.RoundService/Update", true},
	route{"/round.RoundService/Delete", true},
	route{"/level.LevelService/List", false},
	route{"/level.LevelService/Get", false},
	route{"/level.LevelService/Create", false},
	route{"/level.LevelService/Update", false},
	route{"/level.LevelService/Delete", false},
}

func UnaryServerInterceptor(ctx context.Context, req interface{}, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (interface{}, error) {
	for _, r := range routes {
		if info.FullMethod == r.name {
			if r.isAuth {
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