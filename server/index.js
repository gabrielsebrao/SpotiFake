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

    if(!dados.username || !dados.email || !dados.password || !dados.birthday) { 
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

app.post('/login', async () => {

    try {
        var dados = req.body
    } catch(error) {
        res.status(500).send("Erro interno do servidor")
        console.log("Erro no servidor!")
        console.log(error)
        console.log(req.body)
        return
    }

    console.log(dados)

    if(!dados.username || !dados.password) { 
        console.log("Dados insuficientes para logar!")
        res.status(406).send("Todos os campos devem ser enviados!")
        return
    }

    let user = await User.findOne({ where: { username: dados.username } })

    if(!user) {
        console.log("Username não existe!")
        res.status(404).send("Username não encontrado!!")
        return
    }

    if(!bcryptjs.compareSync(dados.password, user.password)) {
        console.log("Senha incorreta!")
        res.status(401).send("Senha incorreta!")
        return
    }

    const token = jwt.sign(
        {
            nome: user.nome,
            email: user.email,
            _id: user.id
        },
        "jwtsuperseguro",
        { expiresIn: 1000*60*60*24*365 }
    )

    console.log(token)
    res.cookie("KawaiifyToken", token).send("Token efetuado com sucesso!")

})

app.listen(8000)