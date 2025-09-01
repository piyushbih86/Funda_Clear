require('dotenv').config();

const express = require('express');
const cors= require('cors');
const mongoose = require('mongoose');
const app=express();
const PORT=process.env.PORT || 5000;
const MONGO_URI=process.env.MONGO_URI;

cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
});

app.use(express.json());

mongoose.connect(MONGO_URI).then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.error("Error connecting to MongoDB", err);
});
app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Define your routes here
// Example route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);
});

