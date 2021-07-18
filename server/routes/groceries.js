import express from "express";
import { getGroceries, createGroceries, updateGrocery, deleteGrocery } from "../controllers/groceries.js";

const router = express.Router();

router.get('/', getGroceries);
router.post('/', createGroceries);
router.patch('/:id', updateGrocery);
router.delete('/:id', deleteGrocery);


export default router;