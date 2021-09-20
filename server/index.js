
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import routes from './routes/post.js';


const app = express();


app.use(express.json())
app.use(express.urlencoded({extended: true }))
app.use(cors());

const CONNECTION_URL='mongodb+srv://boutiqueatdoorstep:boutiqueatdoorstep@cluster0.dn7st.mongodb.net/cluster0?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
         .then(() => app.listen(PORT,() => console.log(`Server Running at PORT ${PORT}`)))
         .catch((error) => console.log(`${error} did not connect`))




app.use('/btq',routes)
//mongoose.set('useFindAndModify', false);



