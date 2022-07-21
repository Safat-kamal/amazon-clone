const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    url: String,
    name: String,
    price: Number, 
})

const ordersSchema = mongoose.Schema({
    userId:String,
    orderId:String,
    orders: [Object],
    orderTotal:Number,
    createdAt:{
        type: Date,
        default: Date.now
    }
});

const orderModal = mongoose.model('orders',ordersSchema);

module.exports = orderModal;