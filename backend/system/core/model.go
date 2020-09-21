package core

import "database/sql"

type Model struct {
	Created_at string;
	Updated_at string;
	Deleted_at sql.NullString;
}

func (Model) TableName() (string) {
	return ""
}

func (this *Model) Test() string {
	return "Init model"
}