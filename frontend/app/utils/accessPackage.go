package utils

type AccessToken struct {
	value string
}

func (this *AccessToken) Get() string {
	this.value = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDA3MzEyMzksImRhdGEiOnsiQ3JlYXRlZF9hdCI6IiIsIkRlbGV0ZWRfYXQiOnsiU3RyaW5nIjoiIiwiVmFsaWQiOmZhbHNlfSwiVXBkYXRlZF9hdCI6IiIsImVtYWlsIjoiZGVtb0BnbWFpbC5jb20iLCJpZCI6MSwibmFtZSI6IkFkbWluIiwicGFzc3dvcmQiOiJhYmNAMTIzNCJ9fQ.UT5gB1zo8vKEYhC7q0k_uoKiPMnNnIX4PoCTvM7hUt8";
	return this.value
}

func (this *AccessToken) Set(value string) {
	this.value = value;
}