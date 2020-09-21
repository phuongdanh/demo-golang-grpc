package jwt

import (
	"fmt"
	"log"
	"time"
	"strings"
	"github.com/dgrijalva/jwt-go"
	"question.app/demo/system/config/env"
)

type UserClaim struct {
	jwt.StandardClaims
	Data map[string]interface{} `json:"data"`
}

func Data() map[string]interface{} {
	return map[string]interface{} {
		"id": 1,
		"name": "Từ Phương Danh",
		"email": "tuphuongdanh1996@gmail.com",
		"role": "admin",
		"exp": time.Now().Add(time.Minute * 1000).Unix(),
	}
}

func Create(data map[string]interface{}) string {
	claimData := UserClaim{
		jwt.StandardClaims{
			ExpiresAt: time.Now().Add(time.Minute * 1000).Unix(),
		},
		data,
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claimData)
	tokenString, err := token.SignedString([]byte(env.Get("JWT_KEY")))
	if err != nil {
		log.Fatalf("Failed: %v", err)
	}
	log.Println(tokenString)
	return tokenString
}

func Exact(tokenString string) (map[string]interface{}, error) {
	tokenArr := strings.Split(tokenString, ".")
	if len(tokenArr) != 3 {
		return nil, fmt.Errorf("Invalid format token")
	}

	token, err := jwt.ParseWithClaims(tokenString, &UserClaim{}, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		 }
		return []byte(env.Get("JWT_KEY")), nil
	})

	if claims, ok := token.Claims.(*UserClaim); ok && token.Valid {
		fmt.Printf("Id: %v\n", claims.Data["id"])
		fmt.Printf("Name: %v\n", claims.Data["name"])
		fmt.Printf("Email: %v\n", claims.Data["email"])
		return claims.Data, nil
	} else {
		v, _ := err.(*jwt.ValidationError)
		switch v.Errors {
			case jwt.ValidationErrorExpired:
				fmt.Println(jwt.ValidationErrorExpired)
				break
			case jwt.ValidationErrorMalformed:
				fmt.Println(jwt.ValidationErrorMalformed)
				break
			case jwt.ValidationErrorUnverifiable:
				fmt.Println(jwt.ValidationErrorUnverifiable)
				break
			case jwt.ValidationErrorSignatureInvalid:
				fmt.Println(jwt.ValidationErrorSignatureInvalid)
				break
			case jwt.ValidationErrorNotValidYet:
				fmt.Println(jwt.ValidationErrorNotValidYet)
				break
		}
		return nil, err
	}
}