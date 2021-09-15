const express = require('express');
const mongoose = require('mongoose');
const taskRouter = require('./taskRouter.js');
const authRouter = require('./authRouter');
const cors = require('cors');


const PORT = 3002;

const app = express();

app.use(express.json());
app.use(cors());
app.use('/tasks', taskRouter);
app.use('/auth', authRouter);

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://user:user@cluster0.ozyv7.mongodb.net/mongo?retryWrites=true&w=majority')
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch(e) {
        console.log(e)
    }
}

start();