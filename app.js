const express = require('express');
const mongoose = require('mongoose');

const itemRouter = require('./routers/itemRoute')

const app = express();

const port = process.env.port || 3000

const dbURI = 'mongodb+srv://Hussam:Hussam1234@nodetuts.2yn7oqj.mongodb.net/node-tuts?retryWrites=true&w=majority&appName=nodetuts'

app.use(express.urlencoded({extended : true}));

mongoose.connect(dbURI)
    .then(()=>{
        console.log('DataBase connected ... ');
    })
    .catch((err)=>{
        console.log('DataBase connection error ... ', err);
    });

    app.use('/item', itemRouter);
    
    app.listen(port , ()=>{
        console.log(`server running on port ${port}`);
    })
