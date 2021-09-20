import mongoose from 'mongoose';

const serviceScheme = mongoose.Schema({
    title:String,
    price:Number,
    status:Number,
    discount:Number,
    description:String,
    createdAt:{
        type:Date,
        default:new Date()
    }
})

var PostServices = mongoose.model('PostServices',serviceScheme);
export default PostServices