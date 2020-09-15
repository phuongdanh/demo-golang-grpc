.PHONY: serve-backend serve-frontend

serve-backend:
	cd ./question ;\
	go run main.go

serve-frontend:
	cd ./my-app ;\
	revel run