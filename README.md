# Welcome to the board

This project is purpose to understand how to use GRPC in Golang

## Structure

  There are three parts in this system
  - Backend
  - Frontend
  - Proto files

## Configuration

  > Copy file .env.example to .env and edit your environment

  **Generate the protoc file, make sure you are one root dir.**
  ```
  make gen-proto
  ```
  **If you want to generate particular file, set file=<filename> without the extension**
  ```
  make gen-proto file=<file_name>
  ```
  For example you have now file named. admin_message.proto
  You can run:
  ```
  make gen-proto file=admin_message
  ```
  It will generate proto files, check it by looking at the ./backend/protos and ./frontend/protos

## Run app:
  The system build with pure Golang for backend and Revel framework for frontend


### Run backend:

  Run following command line at root folder

  ```
  make serve-backend
  ```

### Run frontend

  Run following command line at root folder and open your browser to run generated host
  ```
  make serve-backend
  ```

## Help
  If you encourage any problem, please find the solution or make new issue [here](https://github.com/phuongdanh/demo-golang-grpc/issues).
