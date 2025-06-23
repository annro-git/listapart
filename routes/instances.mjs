import Instance from "../models/instances.mjs";
import Item from "../models/items.mjs";
import { Router } from "express";

const router = Router()

// READ AN INSTANCE
router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const instance = await Instance.findById(id)
    res.json({ result: true, instance })
  } catch (error) {
    console.error(error)
    res.json({ result: false, error })
  }
})

// COPY ALL ITEMS FROM SCRATCH
router.post('/new/', async (req, res) => {
  const items = await Item.find({})
  const itemList = items.map(({ name, room, type, condition, comment }) => {
    return { name, room, type, condition, comment }
  })
  const instance = new Instance({ itemList, completed: false })
  try {
    await instance.save()
    res.json({ result: true, itemNumber: itemList.length })
  } catch (error) {
    console.error(error)
    res.json({ result: false, error })
  }
})

// COPY ALL ITEMS FROM AN INSTANCE
router.post('/copy/:id', async (req, res) => {
  const { id } = req.params
  try {
    const { itemList } = await Instance.findById(id)
    const instance = new Instance({ itemList, completed: false })
    await instance.save()
    res.json({ result: true, itemNumber: itemList.length })
  } catch (error) {
    console.error(error)
    res.json({ result: false, error })
  }
})

// UPDATE AN INSTANCE
router.put('/:id', async (req, res) => {
  const { id } = req.params
  const { itemList, completed } = req.body
  try {
    if (!itemList && completed) {
      await Instance.findOneAndUpdate({ _id: id }, { completed })
    } else if (itemList && !completed) {
      await Instance.findOneAndUpdate({ _id: id }, { itemList })
    } else {
      await Instance.findOneAndUpdate({ _id: id }, { itemList, completed })
    }
    res.json({ result: true })
  } catch (error) {
    console.error(error)
    res.json({ result: false, error })
  }
})

// DELETE AN INSTANCE
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    await Instance.deleteOne({ _id: id })
    res.json({ result: true })
  } catch (error) {
    console.error(error)
    res.json({ result: false, error })
  }
})

export { router as instanceRouter }