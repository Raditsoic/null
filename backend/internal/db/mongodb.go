package db

import (
	"context"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var connection_string string = "mongodb://localhost:27017"
var db_name string = "null"

const max_pool_size = 50
const timeout_second = 30

var client *mongo.Client
var database *mongo.Database

func init() {
	var err error
	client, err := connect()
	if err != nil {
		log.Fatal(err)
	}

	database = client.Database(db_name)
}

func connect() (*mongo.Client, error) {
	clientOption := options.Client().ApplyURI(connection_string)
    clientOption = clientOption.SetMaxPoolSize(max_pool_size)

    ctx, cancel := context.WithTimeout(context.Background(), timeout_second*time.Second)
    defer cancel()

    client, err := mongo.Connect(ctx, clientOption)
    if err != nil {
        return nil, err
    }

    err = client.Ping(ctx, nil)
    if err != nil {
        return nil, err
    }

    log.Println("Connected to MongoDB")
    return client, nil
}

func GetCollection(collection_name string) *mongo.Collection {
	return database.Collection(collection_name)
}


