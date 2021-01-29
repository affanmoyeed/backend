const mongoose = require('mongoose');
const config = require('config');
require('dotenv').config();
const db = "mongodb+srv://affan:484848@cluster0.l0aun.mongodb.net/Cluster0?retryWrites=true&w=majority";
jwtSecret = "mysecrettoken";

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true, useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('MongoBD connected...')
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}
module.exports = connectDB;