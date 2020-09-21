package round

import "context"
import "fmt"
import "log"
import "question.app/demo/system/database"

type Service struct {}

func (this Service) Create() {
	mg := database.Mongo()
	coll := mg.Collection(Model{}.TableName())
	result, err := coll.InsertMany(
		context.Background(),
		[]interface{}{
			Model{Name: "Tu Phuong Danh", Score: 9.5}.ToBson(),
		})
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("%v", result)
}