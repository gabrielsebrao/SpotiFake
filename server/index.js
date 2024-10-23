import Express from 'express'
import bcryptjs from 'bcryptjs'
import { User, criarTabelas } from './db.js'

const app = Express()
app.use(Express.json())

app.get('/', (req, res) => {
    res.send("<h1>Oi, usuário do meu servidor!</h1>")
})

app.post('/registro', async (req, res) => {

    try {
        var dados = req.body
    } catch(error) {
        res.status(500).send("Erro interno no servidor")
        console.log("Erro no servidor!")
        console.log(error)
        console.log(req.body)
        return
    }

    if(!dados.nickname || !dados.email || !dados.password || !dados.birthday) { 
        console.log("Dados insuficientes para criar usuário!")
        res.status(406).send("Todos os campos devem ser enviados!")
        return
    }

    if(await User.findOne({where: {username: dados.username}})) {
        console.log("Username indisponível!")
        res.status(409).send("Username indisponível!")
        return
    }

    if(await User.findOne({where: {email: dados.email}})) {
        console.log("Email já utilizado!")
        res.status(409).send("Email já utilizado!")
        return
    }

    User.create({
        username: dados.username,
        email: dados.email,
        password: bcryptjs.hashSync(dados.password, 10),
        birthday: dados.birthday
    })

    console.log("Usuário criado!")
    console.log(dados)
    res.status(201).send("Usuário criado com sucesso!")
    return

})

app.listen(8000)