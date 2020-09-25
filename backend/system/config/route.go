package config

type route struct {
	Name string
	IsAuth bool
}

var Routes = []route{
	route{"/protos.AuthServeice/Login", false},

	route{"/protos.RoundService/List", true},
	route{"/protos.RoundService/Get", true},
	route{"/protos.RoundService/Create", true},
	route{"/protos.RoundService/Update", true},
	route{"/protos.RoundService/Delete", true},
	
	route{"/protos.LevelService/List", true},
	route{"/protos.LevelService/Get", true},
	route{"/protos.LevelService/Create", true},
	route{"/protos.LevelService/Update", true},
	route{"/protos.LevelService/Delete", true},

	route{"/protos.UserService/List", true},
	route{"/protos.UserService/Get", true},
	route{"/protos.UserService/Create", true},
	route{"/protos.UserService/Update", true},
	route{"/protos.UserService/Delete", true},
}