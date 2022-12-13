const mongoose = require('mongoose');
const { MONGO_DB , MONGO_PORT} = process.env;
mongoose.set('strictQuery', false)
const connection = mongoose.connect(`mongodb://127.0.0.1:${MONGO_PORT}/${MONGO_DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

connection
    .then(() => {
        console.log(`mongodb connected successfully!`);
    })
    .catch(err => {
        console.log('error in mongodb connection', err.message);
    });