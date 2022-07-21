const mongoose = require('mongoose');
const dbUrl = process.env.DATABASE_URL;

mongoose.connect(dbUrl,{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}).then(()=>console.log("Database Connected Succesfully")).catch((error)=>console.log(error.message));
