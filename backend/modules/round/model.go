package round
import "go.mongodb.org/mongo-driver/bson"

type Model struct {
	Name string;
	Score float32;
}

func (this Model) TableName() string {
	return "rounds"
}

func (this Model) ToBson() bson.D {
	data := bson.D{
		{"name", this.Name},
		{"score", this.Score},
	}
	return data
}
