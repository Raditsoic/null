package handlers

import (
	"encoding/json"
	"net/http"
	"time"

	"github.com/raditsoic/null/internal/auth"
	"github.com/raditsoic/null/internal/db/repositories"
	"golang.org/x/crypto/bcrypt"
)

func LoginHandler(w http.ResponseWriter, r *http.Request) {
	var creds struct {
		Name     string `json:"name"`
		Password string `json:"password"`
	}
	err := json.NewDecoder(r.Body).Decode(&creds)
	if err != nil {
		http.Error(w, "Bad request", http.StatusBadRequest)
		return
	}

	user, err := repositories.GetUserByName(creds.Name)
	if err != nil {
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}
	if user == nil {
		http.Error(w, "Unauthorized: User", http.StatusUnauthorized)
		return
	}

	err = bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(creds.Password))
	if err != nil {
		http.Error(w, "Unauthorized: Password", http.StatusUnauthorized)
		return
	}

	token, err := auth.CreateToken(creds.Name)
	if err != nil {
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}

	http.SetCookie(w, &http.Cookie{
		Name:     "token",
		Value:    token,
		Expires:  time.Now().Add(24 * time.Hour),
		HttpOnly: true,
		Secure:   true, 
		SameSite: http.SameSiteLaxMode,
	})

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]string{"token": token})
}
