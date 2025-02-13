const express = require("express")
const cors = require("cors");
require("./database/config")

const categoryRouter = require("./src/routes/category")
const ItemRouter = require("./src/routes/item")

const app = express()

app.use(express.json())
app.use(cors());

app.use("/api/category", categoryRouter)
app.use("/api/item", ItemRouter)

app.listen(3000, () => {
  console.log("Servidor iniciado")
})