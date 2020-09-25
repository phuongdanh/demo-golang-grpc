package user
import (
	"fmt"
	"question.app/demo/system/core"
	pb "question.app/demo/protos"
	"encoding/json"
	"database/sql"
)

type Model struct {
	Id int32          				`json:"id"`
	Name string       				`json:"name"`
	Email string							`json:"email"`
	Password string						`json:"password"`
	About sql.NullString 			`json:"about,string"`
	Avatar sql.NullString 		`json:"avatar,string"`
	core.Model
}

func (Model) TableName() (string) {
	return "users"
}

func (this Model) ToMessage() (*pb.UserMessage) {
	about, _ := this.About.Value()
	avatar, _ := this.Avatar.Value()
	return &pb.UserMessage {
		Id: this.Id,
		Name: this.Name,
		Email: this.Email,
		About: fmt.Sprint(about),
		Avatar: fmt.Sprint(avatar),
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