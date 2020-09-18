package system

import (
	"fmt"
	"net"
	"log"
	"github.com/joho/godotenv"
	"question.app/demo/system/config/env"
)

func Init() {
	_initLoadEnv()
}

func _initLoadEnv() {
	err := godotenv.Load()
	var envMap map[string]string
	envMap, err = godotenv.Read()
  if err != nil {
    log.Fatal("Error loading .env file")
	}
	env.Global.Data = envMap
}

func InitServer() {
	host := env.Get("HOST")
	if (host == "") {
		host = "localhost"
	}
	port := env.Get("PORT")
	if (port == "") {
		port = "50051"
	}
	fmt.Printf("Starting server with host: %v\n", (host+":"+port))
	lis, err := net.Listen("tcp", (host+":"+port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	} else {
		fmt.Printf("Server running at: %v \n", (host+":"+port))
	}
	Register(lis)
}