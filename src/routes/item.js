const express = require("express")
const router = express.Router()
const Item = require("../models/item")

router.get("/", async (req, res) => {
  try {
    const item = await Item.find({})
    res.status(200).send(item)
  } catch(error) {
    res.status(500).send(error)
  }
})

router.post("/", async (req, res) => {
  const { name, amount, price, category, description, updatedAt, createdAt } = req.body

  try {
    const item = await Item.create({ name, amount, price, category, description, updatedAt, createdAt })
    res.status(200).send(item)
  } catch(error) {
    res.status(422).send(error)
  }
})

router.get("/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id)
    res.status(200).send(item)
  } catch(error) {
    res.status(422).send(error)
  }
})

router.put("/:id", async (req, res) => {
  const { name, amount, price, category, description, createdAt, updatedAt } = req.body

  try {
    const item = await Item.findByIdAndUpdate(req.params.id, { name, amount, price, category, description, createdAt, updatedAt }, { new: true })
    res.status(200).send(item)
  } catch(error) {
    res.status(422).send(error)
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id)
    res.status(200).send(item)
  } catch(error) {
    res.status(422).send(error)
  }
})

module.exports = router