package utils

import (
	"context"
	"google.golang.org/grpc/metadata"
)

func ContextRequest(token string, params ...map[string]string) context.Context {
	header := map[string]string{
		"authorization": "Bearer "+token,
		"space":  "", 
		"org": "", 
		"limit": "", 
		"offset": "",
	}
	if len(params) > 0 { 
		for k, v := range params[0] {
			header[k] = v
		}
	}
	ctx := metadata.NewOutgoingContext(context.Background(), metadata.New(header))
	return ctx
}