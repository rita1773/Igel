import express from 'express';
import mongoose from 'mongoose';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import dotenv from 'dotenv';
import orderRouter from './routers/orderRouter.js';
import path from 'path';
import uploadRouter from './routers/uploadRouter.js';


dotenv.config();

const app = express();
app.use(cors({
origin: ["https://igel.vercel.app"],
methods:["POST", "GET"],
credential: true
}
));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/ice', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});



app.use('/api/uploads', uploadRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

app.use('/api/orders', orderRouter);

app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// app.get('/', (req, res) => {
//   res.send('Server is ready');
// });

app.use(express.static(path.join(__dirname, '/ice-gel/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/ice-gel/build/index.html'))
);

if (process.env.NODE_ENV == 'production') {
  // Set static folder
  app.use(express.static('/ice-gel/build'));

  app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/ice-gel/build/index.html'))
  );
}
// app.get('/', (req, res) => {
//   res.send('Server is ready');
// });

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});



const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
