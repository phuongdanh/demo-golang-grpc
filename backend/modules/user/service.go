package user

import (
	"bytes"
	"os"
	"fmt"
)

type Service struct {
	
}

func (this Service) SaveFile(fileName string, fileData bytes.Buffer) (*string, error) {
	filePath := "./storage/uploads/"+fileName
	file, err := os.Create(filePath)
	if err != nil {
		return nil, fmt.Errorf("cannot create image file: %w", err)
	}
	_, err = fileData.WriteTo(file)
	if err != nil {
		return nil, fmt.Errorf("cannot write image to file: %w", err)
	}
	return &filePath, nil
}