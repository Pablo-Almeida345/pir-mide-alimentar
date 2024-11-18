const express = require("express")
const cors = require("cors")
const mysql = require("mysql2")
const jwt = require("jsonwebtoken")

const app = express()

const {DB_HOST, DB_NAME, DB_USER, DB_PASSWORD} = process.env // isso vai dar acesso ao que criamos

app.use(cors())

app.use(express.json())

app.post("/register", (request, response) => {
    const user = request.body.user

    const searchComand = `
        SELECT * FROM Users
        WHERE email = ?
    `

    db.query(searchComand, [user.email], (erro, data) => {
        if(erro){
            console.log(erro)
            return
        }

        if(data.length !== 0){
            response.json({message: "Já existe um usuario cadastrado com esse email. Tente outro email!", userExists: true})
            return
        }

        const insertComand = `
            INSERT INTO Users(name, email, password)
            VALUES(?,?,?)
        `

        db.query(insertComand, [user.name, user.email, user.password], (error) => {
            if(erro){
                console.log(error)
                return
            }

            response.json({message: "ùsuario cadastrado com sucesso!"})
        })
    })
})

app.post("/login", (request, response) => {
    const user = request.body.user

    console.log(user)
})

app.listen(3000, () => {
    console.log("Servidor Rodando na porta 3000!")
})


const db = mysql.createPool({
    connectionLimit: 10,
    host: DB_HOST,
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASSWORD
})