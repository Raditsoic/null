package models

type User struct {
	ID       string `json:"id" bson:"_id"`
	Name     string `json:"name" bson:"name"`
	Age      uint16 `json:"age" bson:"age"`
	Email    string `json:"email" bson:"email"`
	Password string `json:"password" bson:"password"`
}
