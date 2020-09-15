package database

import (
    "database/sql"
    _ "github.com/go-sql-driver/mysql"
)

func Conn() (db *sql.DB) {
    dbDriver := "mysql"
    dbUser := "root"
    dbPass := ""
    dbName := "questions"
    db, err := sql.Open(dbDriver, dbUser+":"+dbPass+"@/"+dbName)
    if err != nil {
        panic(err.Error())
    }
    return db
}
