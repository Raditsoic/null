package auth

import (
	"fmt"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

var secret_key = []byte("secret_key")

func CreateToken(username string) (string, error) {
	token := jwt.NewWithClaims(jwt.SigningMethodES256,
		jwt.MapClaims{
			"username": username,
			"exp":      time.Now().Add(time.Hour * 24).Unix(),
		})

	token_string, err := token.SignedString(secret_key)
	if err != nil {
		return "", nil
	}

	return token_string, nil
}

func VerifyToken(token_string string) error {
	token, err := jwt.Parse(token_string, func(token *jwt.Token) (interface{}, error) {
		return secret_key, nil
	})

	if err != nil {
		return err
	}

	if !token.Valid {
		return fmt.Errorf("invalid token")
	}

	return nil
}
