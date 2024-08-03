package models

type Conversation struct {
	ID   string `json:"id" bson:"_id"`
	Chat []Chatbot `json:"chat" bson:"chat"`
}