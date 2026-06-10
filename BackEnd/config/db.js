const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        const userCollection = mongoose.connection.collection('users');
        const indexes = await userCollection.indexes();
        const hasUsernameIndex = indexes.some((index) => index.name === 'username');

        if(hasUsernameIndex){
            await userCollection.dropIndex('username._id');
            console.log('Removed user name of index 1 from collection');
        }

        console.log('Database Connected Successfully')
    }
    catch(error){
            console.log(error.message);
            console.log('Database Connection Failed');
            throw error;
        }
};

module.exports = connectDB;