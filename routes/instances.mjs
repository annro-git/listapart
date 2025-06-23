import Instance from "../models/instances.mjs";
import Item from "../models/items.mjs";
import { Router } from "express";

const router = Router()

router.post('/new/', async (req, res) => {
  const items = await Item.find({})
  const itemList = items.map(({ name, room, type, condition, comment }) => {
    return { name, room, type, condition, comment }
  })
  const instance = new Instance({ itemList, completed: false })
  try {
    await instance.save()
    res.json({ result: true, itemNumber: itemList.length })
  } catch (e) {
    res.json({ result: false, e})
  }

})

export { router as instanceRouter }