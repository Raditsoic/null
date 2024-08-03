package models

type Community struct {
	ID   string `json:"id" bson:"_id"`
	Name string `json:"name" bson:"name"`
	Industry string `json:"industry" bson:"industry"`
	Channels []Channel `json:"channels" bson:"channels"`
}