package level

import "question.app/demo/system/database"
import "question.app/demo/modules/question"
import "log"

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