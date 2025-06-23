import Item from "../models/items.mjs";
import { Router } from "express";

const router = Router()

router.post('/', async (req, res) => {
  const { name, room, type, condition, comment } = req.body
  const item = new Item({ name, type, room, condition, comment })
  try {
    const newItem = await item.save()
    res.json({ result: true, newItem })
  } catch (error) {
    res.json({ result: false, error})
  }
})

export { router as itemRouter }