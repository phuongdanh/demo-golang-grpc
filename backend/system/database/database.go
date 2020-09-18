package database

import (
    "database/sql"
    _ "github.com/go-sql-driver/mysql"
)

func Conn() (db *sql.DB) {
    db, err := sql.Open("mysql", "root:@tcp(localhost:2323)/questions")
    if err != nil {
        panic(err.Error())
    }
    return db
}
