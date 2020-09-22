package level

import (
    "question.app/demo/system/database"
    "question.app/demo/modules/question"
    "log"
    "fmt"
)

var db = database.Conn()

type Service struct {
}

func (this *Service) List() ([]Model) {
    selDB, err := db.Query("SELECT * FROM "+ Model{}.TableName() +" WHERE deleted_at IS NULL ORDER BY id ASC")
    if err != nil {
        panic(err.Error())
    }
    res := []Model{}
    for selDB.Next() {
		var level Model
        err = selDB.Scan(&level.Id, &level.Name, &level.Default_score, &level.Created_at, &level.Updated_at, &level.Deleted_at)
        if err != nil {
            panic(err.Error())
		}
        res = append(res, level)
    }
    return res
}

func (this *Service) Get(id int32) (*Model, error) {
    query := "SELECT id, name, default_score, created_at, updated_at FROM "+Model{}.TableName()+" WHERE deleted_at IS NULL AND id = "+fmt.Sprint(id);
	db := database.Conn()
	var item Model
	err := db.QueryRow(query).Scan(&item.Id, &item.Name, &item.Default_score, &item.Created_at, &item.Updated_at)
	if err != nil {
		log.Printf("Failed: %v", err)
		return nil, fmt.Errorf("Could not found that email")
	}
	return &item, nil
}

func (this *Service) GetQuestions() ([]question.Model) {
    selDB, err := db.Query("SELECT * FROM "+ question.Model{}.TableName() +" WHERE deleted_at IS NULL ORDER BY id ASC")
    if err != nil {
        panic(err.Error())
    }
    res := []question.Model{}
    for selDB.Next() {
		var row question.Model
        err = selDB.Scan(&row.Id, &row.Level_id, &row.Question, &row.Right_answer, &row.Max_score, &row.Created_at, &row.Updated_at, &row.Deleted_at)
        if err != nil {
            panic(err.Error())
		}
        res = append(res, row)
    }
    return res
}

func (this *Service) Create(item Model) (*Model, error) {
    stmt, err := db.Prepare("INSERT INTO "+ Model{}.TableName() +" (`name`, `default_score`, `created_at`, `updated_at`) VALUES (?, ?, '2020-10-10 10:10:10', '2020-10-10 10:10:10')")
    if err != nil {
        log.Fatalf("Failed: %v", err)
    }
    defer stmt.Close()
    if _, err := stmt.Exec(item.Name, item.Default_score); err != nil {
        log.Fatalf("Failed: %v", err)
        return nil, err
    }
    return &item, nil
}

func (this *Service) Delete(id int32) error {
    _, err := this.Get(id)
    if err != nil {
        return fmt.Errorf("Could not found this item")
    }
    stmt, err := db.Prepare("UPDATE "+ Model{}.TableName() +" SET `deleted_at` = '2020-09-09' WHERE `id` = ?")
    if err != nil {
        log.Fatalf("Failed: %v", err)
    }
    defer stmt.Close()
    if _, err := stmt.Exec(id); err != nil {
        log.Fatalf("Failed: %v", err)
        return err
    }
    return nil
}