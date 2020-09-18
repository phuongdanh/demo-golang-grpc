package user
import (
	"fmt"
	"question.app/demo/system/core"
	pb "question.app/demo/protos"
	"encoding/json"
)

type Model struct {
	Id int32          `json:"id"`
	Name string       `json:"name"`
	Email string			`json:"email"`
	Password string		`json:"password"`
	core.Model
}

func (Model) TableName() (string) {
	return "users"
}

func (this Model) ToMessage() (*pb.UserMessage) {
	return &pb.UserMessage {
		Id: this.Id,
		Name: this.Name,
		Email: this.Email,
		CreatedAt: this.Created_at,
		UpdatedAt: this.Updated_at,
		DeletedAt: fmt.Sprintf("%v", this.Deleted_at),
	}
}

func (this Model) ToMap() map[string]interface{} {
	var inInterface map[string]interface{}
	inrec, _ := json.Marshal(this)
	json.Unmarshal(inrec, &inInterface)
	return inInterface;
}