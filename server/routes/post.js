import  express  from "express";
import {getServices,saveServices,getDetails,saveQuoteData}  from '../controllers/post.js';

const router = express.Router();

router.get('/',getServices);
router.post('/',saveServices);
router.get('/:id',getDetails);
router.post('/get-quote',saveQuoteData);

export default router