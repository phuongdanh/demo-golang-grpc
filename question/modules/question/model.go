package question

import "database/sql"

type Model struct {
	Id int;
	Level_id int;
	Question string;
	Right_answer int;
	Max_score float32;
	Created_at string;
	Updated_at string;
	Deleted_at sql.NullString;
}

func (Model) TableName() (string) {
	return "questions"
}