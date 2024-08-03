package repositories

import (
	"context"

	"github.com/raditsoic/null/internal/db"
	"github.com/raditsoic/null/internal/db/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

var user_collection *mongo.Collection

func init() {
	user_collection = db.GetCollection("users")
}

func GetUserByName(name string) (*models.User, error) {
    var user models.User
    filter := bson.D{{Key: "name", Value: name}}

    err := user_collection.FindOne(context.TODO(), filter).Decode(&user)
    if err != nil {
        if err == mongo.ErrNoDocuments {
            return nil, nil
        }
        return nil, err
    }

    return &user, nil
}

func CreateUser(user *models.User) (*mongo.InsertOneResult, error) {
    return user_collection.InsertOne(context.TODO(), user)
}
