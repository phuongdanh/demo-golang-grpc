package level

import "database/sql"
import pb "question.app/demo/protos/level"

type Model struct {
	Id int32;
	Name string;
	Default_score float32;
	Created_at string;
	Updated_at string;
	Deleted_at sql.NullString;
}

func (Model) tableName() (string) {
	return "levels"
}

func (this Model) ToMessage() (*pb.LevelMessage) {
	return &pb.LevelMessage {
		Id: this.Id,
		Name: this.Name,
		DefaultScore: this.Default_score,
	}
}