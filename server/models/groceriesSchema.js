import mongoose from 'mongoose';

const groceriesSchema = mongoose.Schema({
    groceryItem: String,
    isPurchased: Boolean
});

const PostGroceries = mongoose.model('PostGroceries', groceriesSchema);

export default PostGroceries;