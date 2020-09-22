package utils

type AccessToken struct {
	value string
}

func (this *AccessToken) Get() string {
	this.value = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDA3OTg1MjAsImRhdGEiOnsiQ3JlYXRlZF9hdCI6IiIsIkRlbGV0ZWRfYXQiOnsiU3RyaW5nIjoiIiwiVmFsaWQiOmZhbHNlfSwiVXBkYXRlZF9hdCI6IiIsImVtYWlsIjoiZGVtb0BnbWFpbC5jb20iLCJpZCI6MSwibmFtZSI6IkFkbWluIiwicGFzc3dvcmQiOiJhYmNAMTIzNCJ9fQ.V2fGpOlUfK5mMaaPInnsHChjHa5h45qlaeirCzlexxY";
	return this.value
}

func (this *AccessToken) Set(value string) {
	this.value = value;
}