.PHONY: serve-backend serve-frontend gen-proto echo

serve-backend:
	cd ./backend ;\
	go run main.go

serve-frontend:
	cd ./frontend-go ;\
	revel run

gen-proto:
	@echo "Generating the code from protos ..."; \
	cd ./protos/defines ;\
	protoc -I. \
	--go_out=../../protos/generated_protos_go \
	--go-grpc_out=../../protos/generated_protos_go \
	--js_out=import_style=commonjs:../../protos/generated_protos_js \
	--grpc-web_out=import_style=commonjs,mode=grpcwebtext:../../protos/generated_protos_js \
	./$(file)*.proto ;\
	cd ../../ ;\
	cp ./protos/generated_protos_go/$(file)*.go ./backend/protos/ ;\
	cp ./protos/generated_protos_go/$(file)*.go ./frontend-go/app/protos/ ;\
	cp ./protos/generated_protos_js/$(file)*.js ./frontend/src/protos/ ;\
	echo "Done!";\