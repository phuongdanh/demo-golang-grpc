package utils

import (
	"github.com/revel/revel"
	"log"
)

type AccessToken struct {
	value string
}

func (this AccessToken) Get() string {
	new := revel.Controller{}
	log.Println(new.Session["token"])
	this.value = "";
	return this.value
}

func (this *AccessToken) Set(value string) {
	this.value = value;
}