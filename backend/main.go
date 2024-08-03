package main

import (
	"log"
	"net/http"

	"github.com/raditsoic/null/internal/db"
	"github.com/raditsoic/null/internal/db/handlers"
)

func main() {
	_, err := db.Connect() 
	if err != nil {
		log.Fatalf("Could not connect to the database: %v", err)
	}

	server := http.NewServeMux()
	server.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("This is root!"))
	})
	server.HandleFunc("GET /api/echo", Echo)
	server.HandleFunc("POST /api/register", handlers.RegisterHandler)
	server.HandleFunc("POST /api/login", handlers.LoginHandler)

	log.Println("Server starting on :8080")
	log.Fatal(http.ListenAndServe(":8080", server))
}

func Echo(w http.ResponseWriter, r *http.Request) {
	message := r.URL.Query().Get("message")
	if message == "" {
		message = "No message!"
	}
	w.Write([]byte("Echo: " + message))
}
