package models

type Channel struct {
	ID   string `json:"id" bson:"_id"`
	Chat []Chat `json:"chat" bson:"chat"`
}