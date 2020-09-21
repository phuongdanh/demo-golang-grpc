.PHONY: build serve

build:
	echo "Build the binary" ;\
	cp ./.env ./build/
	go build -i -v -o ./build/ ./main.go ;\
	echo "Done!" ;\

serve:
	go run main.go ;\