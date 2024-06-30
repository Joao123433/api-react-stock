const express = require("express")
const router = express.Router()
const Category = require("../models/category")

router.get("/", async (req, res) => {
  try {
    const category = await Category.find({})
    res.status(200).send(category)
  } catch(error) {
    res.status(500).send(error)
  }
})

router.post("/", async (req, res) => {
  const { name } = req.body

  try {
    const category = await Category.create({name})
    res.status(200).send(category)
  } catch(error) {
    res.status(422).send(error)
  }
})

router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id)
    res.status(200).send(category)
  } catch(error) {
    res.status(422).send(error)
  }
})

router.put("/:id", async (req, res) => {
  const { name } = req.body

  try {
    const category = await Category.findByIdAndUpdate(req.params.id, { name }, { new: true })
    res.status(200).send(category)
  } catch(error) {
    res.status(422).send(error)
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id)
    res.status(200).send(category)
  } catch(error) {
    res.status(422).send(error)
  }
})

module.exports = router