import Express from 'express'

const app = Express()
app.use(Express.json())

app.get('/', (req, res) => {
    res.send("<h1>Oi, usuário do meu servidor!</h1>")
})

app.post('/signup', (req, res) => {

    try {
        var dados = req.body
    } catch(error) {
        res.status(500).send("Erro")
        console.log("Erro no servidor!")
        console.log(error)
        console.log(req.body)
        return
    }

    if(!dados.username || !dados.email || !dados.password || !dados.birthday) { 
        console.log("Dados insuficientes para criar usuário!")
        console.log(dados)
        res.status(406).send("Todos os campos devem ser enviados!")
        return
    }

    console.log("Usuário criado!")
    console.log(dados)

    res.status(201).send("Usuário criado com sucesso!")
    return

})

app.listen(8000)