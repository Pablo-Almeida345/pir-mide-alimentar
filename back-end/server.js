const express = require("express")
const cors = require("cors")
const mysql = require("mysql2")
const jwt = require("jsonwebtoken")

const app = express()

const {DB_HOST, DB_NAME, DB_USER, DB_PASSWORD, SECRET_KEY} = process.env // isso vai dar acesso ao que criamos

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

    const searchCoMmand = `
        SELECT * FROM Users
        WHERE email = ?
    `

    db.query(searchCoMmand, [user.email], (erro, data) => {
        if (erro){
            console.log(erro)
            return
        }

        if(data.length === 0){
            response.json({message: "Não existe um usuário cadastrado com essa e-mail!"})
            return
        }

        if (user.password === data[0].password){
            const email = user.email
            const id = data[0].id//pedi para o marcio explicar
            const token = jwt.sign({ id, email },SECRET_KEY, {expiresIn: "1h" } )
            response.json({token, ok: true}) //e a parte de cima perguntar para o marcio para que serve isso 
            return
        } 

        response.json({message: "Credenciais inválidas Tente novamente"})
    })
})

app.get("/verify", (request, response) => {
    const token = request.headers.authorization

    jwt.verify(token, SECRET_KEY, (error) => {
        if (error){
            response.json({message: "Token inválido! Efetue o login novamente."})
            return
        }

        response.json({ok: true})
    })
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