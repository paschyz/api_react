const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config()

// MongoDB Connection URL
const mongoURL = `${process.env.DB_CONN_STRING}${process.env.DB_NAME}`;
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
// Check if the connection is successful
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', () => {
  console.log('Connected to MongoDB');
});

export {mongoose}