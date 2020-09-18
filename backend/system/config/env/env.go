package env

var Global EnvStruct = EnvStruct{}

type EnvStruct struct {
	MYSQL_URL string
	Data map[string]string
}

func (this *EnvStruct) Getenv(key string) string {
	return this.Data[key]
}

func (this *EnvStruct) Setenv(key string, value string) {
	this.Data[key] = value
}

func Get(key string) string {
	return Global.Getenv(key)	
}

func Set(key string, value string) {
	Global.Setenv(key, value)
}