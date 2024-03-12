const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path:  './.env.example' });

const uri = process.env.DATABASE;

mongoose
  .connect(uri)
  .then(() => console.log('DB Connection Successful 🖐'));

  const port = process.env.PORT || 5000;
  const server = app.listen(port, () => {
    console.log(`Server started ${port} 🖐`);
  });