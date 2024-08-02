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

func connect() (*mongo.Database, error) {
	client_option := options.Client().ApplyURI(connection_string)
	client_option = client_option.SetMaxPoolSize(max_pool_size)

	ctx, cancel := context.WithTimeout(context.Background(), timeout_second*time.Second)
	defer cancel()

	client, err := mongo.Connect(ctx, client_option)
	if err != nil {
		log.Fatal(err)
	}

	return client.Database(db_name), nil
}


