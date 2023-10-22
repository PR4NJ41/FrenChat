import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// dotenv.config();
// const USER_NAME = process.env.USER_NAME;
// const PASSWORD = process.env.PASS;

const Connection = async (username, password) => {
    const URL = `mongodb+srv://username:iambesideyou@iambesideyou.i9jpm9n.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;