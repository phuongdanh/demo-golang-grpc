package question

import (
	"question.app/demo/system/core"
)

type Model struct {
	Id int;
	Level_id int;
	Question string;
	Right_answer int;
	Max_score float32;
	core.Model
}

func (Model) TableName() (string) {
	return "questions"
}