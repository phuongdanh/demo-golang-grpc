package database

import (
    "log"
    "database/sql"
    _ "github.com/go-sql-driver/mysql"
)

func Conn() (db *sql.DB) {
    url := "root:root@tcp(mysql:3306)/questions"
    log.Printf("Connect to: %v", url)
    db, err := sql.Open("mysql", url)
    if err != nil {
        panic(err.Error())
    }
    err = db.Ping();
    if err != nil {
        log.Printf("Failed connection: %v", url)
        panic("Connection with data failed")
    }
    return db
}
