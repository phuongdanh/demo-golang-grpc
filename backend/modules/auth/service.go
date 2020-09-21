package auth

import (
	"fmt"
	"log"
	"question.app/demo/modules/user"
	"question.app/demo/system/database"
)

type Service struct {
}

func (this Service) Login(input Model) (*user.Model, error) {
	query := "SELECT id, name, email, password FROM "+user.Model{}.TableName()+" WHERE email = '"+input.Email+"'"
	db := database.Conn()
	var item user.Model
	err := db.QueryRow(query).Scan(&item.Id, &item.Name, &item.Email, &item.Password)
	if err != nil {
		log.Printf("Failed: %v", err)
		return nil, fmt.Errorf("Could not found that email")
	}
	if item.Password != input.Password {
		return nil, fmt.Errorf("Password not correct")
	}
	return &item, nil
}