const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config()
const mongoURL = `mongodb+srv://admin:Respons11@todolist.lbok7sy.mongodb.net/todolist`;
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', () => {
  console.log('Connected to MongoDB');
});

export {mongoose}