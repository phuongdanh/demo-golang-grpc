
# How it works
follow steps: 1 -> 2 -> 3(3.1 or 3.2)

## 1. Prepare tools
```
// install protobuf:
// for MacOS:
➜  brew install protobuf

//for other:
http://google.github.io/proto-lens/installing-protoc.html

// install grpc-gateway
➜  go install \
  github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway \
  github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2
```

## 2. Getting started for developer
```
// rename
➜  cp .env.example .env

➜  make gen_proto

// 2.1 For local OS: MacOS, Window, Linux -> executable binary regarding to OS
➜  make build

// 2.2 build Linux executable binary only
➜  sudo make build_linux

```


## 3. Run Service

### 3.1 Getting started for local

```
//prepare DB
➜  mysql -u root -p
// Enter password : 123

➜  CREATE DATABASE utm_registration;

➜  exit;


//run executable binaries
!!! For docker you don't need this step, it's automatic !!!

// For migrate DB
➜  make migrate

// For seed DB
➜  make seed

// Start server
➜  make serve

```

### 3.2 Getting started for production

```
// !!! no need to re-build source code again, just mount executable binary and run !!! 
➜  make down
➜  make up
```

## Testing
```
➜  go test -v ./... -cover
```

## Example REST URL
```
POST http://localhost:8080/v1/auth/login
{
	"username": "sadmin",
	"password": "123456"
}
```
