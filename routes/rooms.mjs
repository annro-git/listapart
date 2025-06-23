import Room from "../models/rooms.mjs";
import { Router } from "express";

const router = Router()

router.post('/', async (req, res) => {
  const { name } = req.body
  const room = new Room({ name })
  try {
    const newRoom = await room.save()
    res.json({ result: true, newRoom })
  } catch (e) {
    res.json({ result: false, e})
  }
})

export { router as roomRouter }