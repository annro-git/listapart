import Lease from "../models/leases.mjs";
import { Router } from "express";

const router = Router()

// READ LEASES
router.get('/', async (req, res) => {
  const leases = await Lease.find({})
  try {
    res.json({ result: true, leases })
  } catch (error) {
    console.error(error)
    res.json({ result: false, error })
  }
})

// CREATE A LEASE
router.post('/', async (req, res) => {
  const { name } = req.body
  const lease = new Lease({ name })
  try {
    await lease.save()
  } catch (error) {
    console.error(error)
    res.json({ result: false, error })
  }
})

// UPDATE A LEASE ARRIVAL
router.put('/:id/arrival', async (req, res) => {
  const { id } = req.params
  const { arrival } = req.body
  try {
    await Lease.findOneAndUpdate({ _id: id }, { arrival })
  } catch (error) {
    console.error(error)
    res.json({ result: false, error })
  }
})

// UPDATE A LEASE DEPARTURE
router.put('/:id/departure', async (req, res) => {
  const { id } = req.params
  const { departure } = req.body
  try {
    await Lease.findOneAndUpdate({ _id: id }, { departure })
  } catch (error) {
    console.error(error)
    res.json({ result: false, error })
  }
})

export { router as leaseRouter }