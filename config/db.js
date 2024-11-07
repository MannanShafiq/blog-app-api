const mongoose = require('mongoose');
require('dotenv').config();

module.exports = connect = async () => {
    try {
    const response = await mongoose.connect('mongodb+srv://blog:blog@cluster0.cf0rj70.mongodb.net/blogs?retryWrites=true&w=majority');
    console.log('connection created');
    } catch (error) {
        console.log(error);
    }
}