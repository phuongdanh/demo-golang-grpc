.PHONY: serve-backend serve-frontend gen-proto echo

serve-backend:
	cd ./backend ;\
	go run main.go

serve-frontend:
	cd ./frontend ;\
	revel run

gen-proto:
	@echo "Generating the code from protos ..."; \
	cd ./protos/defines ;\
	protoc -I. \
	--go_out=../../protos/generated_protos \
	--go-grpc_out=../../protos/generated_protos \
	./$(file)*.proto ;\
	cd ../../ ;\
	cp ./protos/generated_protos/$(file)*.go ./backend/protos/ ;\
	cp ./protos/generated_protos/$(file)*.go ./frontend/app/protos/ ;\
	echo "Done!";\