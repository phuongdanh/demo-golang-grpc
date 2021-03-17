package system

import (
	"fmt"
	"net"
	"log"
)

func InitServer() {
	host := "0.0.0.0"
	port := "9090"
	fmt.Printf("Starting server with host: %v\n", (host+":"+port))
	lis, err := net.Listen("tcp", (host+":"+port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	} else {
		fmt.Printf("Server running at: %v \n", (host+":"+port))
	}
	Register(lis)
}