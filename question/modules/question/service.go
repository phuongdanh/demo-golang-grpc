package question

import "question.app/demo/system/database"

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
		var row Model
		err = selDB.Scan(&row.Id, &row.Level_id, &row.Question, &row.Right_answer, &row.Max_score, &row.Created_at, &row.Updated_at, &row.Deleted_at)
        if err != nil {
            panic(err.Error())
		}
        res = append(res, row)
    }
    return res
}