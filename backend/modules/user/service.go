package user

import (
	"bytes"
	"os"
	"fmt"
	"log"
	"question.app/demo/system/database"
)

var db = database.Conn()

type Service struct {
	
}

func (this Service) Get(id int32) (*Model, error) {
	query := "SELECT id, name, email, password, about, "+
		"IF(avatar IS NOT NULL, CONCAT('storage/uploads/', avatar), NULL) as avatar "+
		"FROM "+Model{}.TableName()+" WHERE id = "+fmt.Sprint(id)
	log.Println(query)
	var item Model
	err := db.QueryRow(query).Scan(&item.Id, &item.Name, &item.Email, &item.Password, &item.About, &item.Avatar)
	if err != nil {
		log.Printf("Failed: %v", err)
		return nil, fmt.Errorf("User not found")
	}
	return &item, nil
}

func (this Service) Update(id int32, data map[string]interface{}) (*Model, error) {
	updateQuery := "UPDATE "+ Model{}.TableName() +" SET "
	if len(data) > 0 {
		i := 1
		for k, v := range data {
			updateQuery += (k + " = '" + fmt.Sprint(v)+"'")
			if i < len(data) {
				updateQuery += ", "
			} else {
				updateQuery += " "
			}
		}
		updateQuery += (" WHERE id = " + fmt.Sprint(id))
		stmt, err := db.Prepare(updateQuery)
		if err != nil {
			log.Fatalf("Failed: %v", err)
			return nil, err
		}
		defer stmt.Close()
		if _, err := stmt.Exec(); err != nil {
				log.Fatalf("Failed: %v", err)
				return nil, err
		}
		userData, err := (&Service{}).Get(id)
		if err != nil {
			return nil, err
		}
		return userData, nil
	}
	return nil, fmt.Errorf("Data null")
}

func (this Service) SaveFile(filePath string, fileData bytes.Buffer) (*string, error) {
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