package models

type Company struct {
	ID   string `json:"id" bson:"_id"`
	Name string `json:"name" bson:"name"`
	Review string `json:"review" bson:"review"`
	Location string `json:"location" bson:"location"`
	Industry string `json:"industry" bson:"industry"`
	Jobs []Job `json:"jobs" bson:"jobs"`
}