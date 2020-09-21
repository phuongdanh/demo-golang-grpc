package level

import (
	pb "question.app/demo/protos"
	"question.app/demo/system/core"
)

type Model struct {
	Id int32;
	Name string;
	Default_score float32;
	core.Model
}

func (Model) TableName() (string) {
	return "levels"
}

func (this Model) ToMessage() (*pb.LevelMessage) {
	return &pb.LevelMessage {
		Id: this.Id,
		Name: this.Name,
		DefaultScore: this.Default_score,
		CreatedAt: this.Created_at,
	}
}

func (this Model) FromMessage(message *pb.LevelMessage) Model {
	return Model{
		Id: message.Id,
		Name: message.Name,
		Default_score: message.DefaultScore,
		Model: core.Model{
			Created_at: message.CreatedAt,
			Updated_at: message.UpdatedAt,
		},
	}
}