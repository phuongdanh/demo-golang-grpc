.PHONY: build serve

build:
	echo "Build the binary" ;\
	CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o ./build/ ./main.go ;\
	echo "Done!" ;\

serve:
	go run main.go ;\