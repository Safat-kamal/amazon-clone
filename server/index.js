require('dotenv').config();
const express = require('express');
require('./db.js');
const dbModel = require('./model');
const app = express();
const cors = require('cors');
const stripe = require('stripe')(process.env.PAYMENT_SECRET_KEY);
const port = process.env.PORT || 8000;


//middleware
app.use(express.json());
app.use(cors());


// APIs
app.get('/', async (req, res) => {
  res.status(200).send("Server is Up!");
});


app.post("/payment/create",  async (req,res)=>{
    const totalPay = req.body.amount;
    try{
        const paymentIntent = await stripe.paymentIntents.create({
            amount: totalPay,
            currency: 'inr',
        });
        res.status(201).send({client_secret: paymentIntent.client_secret});
        console.log({client_secret: paymentIntent.client_secret});
    }
    catch(error){
        console.log(error.message);
        res.send({error:error.message});
    }
});



app.post('/order/create', async (req,res)=>{
  try{
    const data = new dbModel(req.body);
    const result = await data.save();
    res.status(201).send(result._id);
  }
  catch(error){
    res.status(500).send(error.message);
  }
});



app.post("/orders", async (req,res)=>{
  try{
    const result = await dbModel.find({userId:req.body.userId});
    res.status(200).send(result);
  }
  catch(error){
    res.status(500).send(error.message);
  }
});



app.post("/order", async (req,res)=>{
  try{
    const result = await dbModel.find({orderId:req.body.orderId});
    res.status(200).send(result);
  }
  catch(error){
    res.status(500).send(error.message);
  }
});




// listener
app.listen(port, () => {
  console.log('Running on port 8000....');
});