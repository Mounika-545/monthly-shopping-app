import mongoose from 'mongoose';
import PostGroceries from '../models/groceriesSchema.js'

export const getGroceries = async (req, res) => {
    try {
        const getAllGroceries = await PostGroceries.find();
        console.log(getAllGroceries);
        res.status(200).json(getAllGroceries);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createGroceries = async (req, res) => {
    const grocery = req.body;
    const newGrocery = new PostGroceries(grocery);

    try {
        await newGrocery.save();
        res.status(201).json(newGrocery);
    } catch (eror) {
        res.status(409).json({ message: error.message });
    }
}


export const updateGrocery = async (req, res) => {

    const { id: _id } = req.params;
    const grocery = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Groceries with taht id');
    const updatedGrocery = await PostGroceries.findByIdAndUpdate(_id, { ...grocery, _id }, { new: true });
    res.json(updatedGrocery);
}

export const deleteGrocery = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Groceries with taht id');
    await PostGroceries.findByIdAndRemove(id);
    res.json({ message: "grocery deleted successfully" });
}