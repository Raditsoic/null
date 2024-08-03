package models

type Job struct {
	ID   string `json:"id" bson:"_id"`
	Name string `json:"name" bson:"name"`
	Company string `json:"company" bson:"company"`
	Location string `json:"location" bson:"location"`
	Position string `json:"position" bson:"position"`
	Experience string `json:"experience" bson:"experience"`
}
