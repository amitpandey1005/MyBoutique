import mongoose from 'mongoose';

const serviceScheme = mongoose.Schema({
    name:String,
    is_deleted:Number,
    email_id:String,
    mobile:Number,
    description:String,
    role:String,
    service_id:Object,
    createdAt:{
        type:Date,
        default:new Date()
    }
})

var GetQuote = mongoose.model('GetQuote',serviceScheme);
export default GetQuote