const mongoose = require("mongoose")

mongoose.Promise = global.Promise

mongoose.connect("mongodb+srv://joaosantos123433:Feliznatal2024!@cluster01.ahojeyj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01")
  .then(() => console.log("Conectado com sucesso ao mongodb"))
  .catch((error) => console.log(error))