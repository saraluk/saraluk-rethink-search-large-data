const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routers/userRouters');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://saralukrethink:saralukrethink@cluster0.s8rlm.mongodb.net/saralukrethink?retryWrites=true&w=majority',
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    );

    console.log(`MongoDB: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectDB();

const app = express();
app.use(express.json());
app.use(userRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log('Server is up on port ' + port));
