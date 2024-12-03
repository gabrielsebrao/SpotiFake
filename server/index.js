import Express from "express"
import cors from "cors"
import routes_auth from "./routes/routes_auth.js"
import routes_user from "./routes/routes_user.js"
import { criarTabelas } from "./db.js"

const app = Express()
const PORT = 8000
app.use(Express.json())
app.use(cors())
criarTabelas()

app.use("/auth", routes_auth)
app.use("/user", routes_user)

app.listen(PORT, () => {
  console.log(`server running in: ${PORT}`)
})

