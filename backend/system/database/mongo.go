package database

import (
	"context"
	"log"
	// "go.mongodb.org/mongo-driver/bson"
    "go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func Mongo() *mongo.Database {
	// host := "localhost"
	// port := "27017"
	dbName := "question"
	// clientOptions := options.Client().ApplyURI("mongodb://"+host+":"+port)
	clientOptions := options.Client().ApplyURI("mongodb://danh:danh@localhost:27016/?authSource=planning")
	client, err := mongo.Connect(context.TODO(), clientOptions)

	if err != nil {
		log.Fatal(err)
	} else {
		log.Print("Success connect")
	}

	err = client.Ping(context.TODO(), nil)

	if err != nil {
		log.Fatal(err)
	}
	return client.Database(dbName)
}