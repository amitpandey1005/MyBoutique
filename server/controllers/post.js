import PostServices from '../models/post.js';
import GetQuote from '../models/GetQuote.js';

export const getServices = async (req,res) =>{
    try{
        const listServices = await PostServices.find();
        res.status(201).json(listServices)
    }catch(error){
        res.status(409).json({message:error.message});
    }
}


export const saveServices = async (req,res) =>{

    try{
        const {title,price,status,description,discount} = req.body;

        const newPostServices = new PostServices({title,price,status,description,discount});

        await newPostServices.save();
        res.status(201).json(newPostServices)
    }catch(error){
        res.status(409).json({message:error.message});
    }
}

export const saveQuoteData = async(req,res) =>{
    try{

        const {name,description,mobile,email_id,service_id} = req.body;

        const newGetQuote = new GetQuote({name,description,mobile,email_id,is_deleted:0,role:'user',service_id})

        await newGetQuote.save()
        res.status(201).json(newGetQuote)

    }catch(error){
        res.status(409).json({message:error.message})
    }
}

export const getDetails = async(req,res) =>{
    try{
        const { id } = req.params;
        const listServices = await PostServices.find({_id:id});
        res.status(201).json(listServices)
    }catch(error){
        res.status(409).json({message:error.message});
    }
}

