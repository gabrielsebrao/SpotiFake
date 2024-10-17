import Express from 'express'

const app = Express()

app.get('/', (req, res) => {
    res.send("<h1>Oi, usuário do meu servidor!</h1>")
})

app.listen(8000)