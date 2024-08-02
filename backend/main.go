package main

import (
	"log"
	"net/http"
)

func main() {
	server := http.NewServeMux()
	server.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("This is root!"))
	})
	server.HandleFunc("GET /api/hello", Hello)
	server.HandleFunc("GET /api/echo", Echo)

	log.Println("Server starting on :8080")
	log.Fatal(http.ListenAndServe(":8080", server))
}

func Hello(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello, World!"))
}

func Echo(w http.ResponseWriter, r *http.Request) {
	message := r.URL.Query().Get("message")
	if message == "" {
		message = "No message!"
	}
	w.Write([]byte("Echo:" + message))
}
