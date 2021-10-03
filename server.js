"use strict";

const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const { getAllconteroller,
    cerateUserData,
    getUserData,
    deleteUserData,
    updateUserData } = require('./controlers/fruteController');
require('dotenv').config();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;
const MONGO_SERVER = process.env.MONGO_SERVER

mongoose.connect(`${MONGO_SERVER}`, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log('DataBase Connected');
});

app.get('/', (req, res) => {
    res.status(200).send('iam working');
})
app.get('/get', getAllconteroller)
app.get('/fru', getUserData);
app.post('/fruPost', cerateUserData);
app.delete('/fru/:id', deleteUserData);
app.put('/fruUpdata/:id', updateUserData);



app.listen(PORT, () => { console.log(`start on server ${PORT}`); });


