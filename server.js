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

app.get('/', async (req, res) => {
  try {
      await mongoose.connection.db.admin().ping();
      res.status(200).send('MongoDB connection is active');
  } catch (err) {
      res.status(500).send('MongoDB connection failed');
  }
});

app.listen(3000, () => {
  console.log("Servidor iniciado")
})