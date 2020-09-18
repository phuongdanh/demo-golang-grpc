package main

import (
	"fmt"
	"question.app/demo/system"
	// "question.app/demo/support/jwt"
	"question.app/demo/modules/level"
)

func main() {
	system.Init()

	var leM level.Model
	fmt.Println(leM.Test())
	
	// token := jwt.Create(jwt.Data())
	// fmt.Println(token)
	system.InitServer()
}
