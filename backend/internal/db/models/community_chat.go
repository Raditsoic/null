package models

type Chat struct {
	ID   string `json:"id" bson:"_id"`
	Text string `json:"text" bson:"text"`
	Author User `json:"author" bson:"author"`
}