import express from 'express';
import mongoose from 'mongoose';
import { clerkMiddleware } from '@clerk/express'
import dotenv from 'dotenv';
import clerkWebhooks from './controller/clerkWebhiiks';
dotenv.config();

const app = express();
const port = 3000;

// Middleware ......................
app.use(express.json())
app.use(clerkMiddleware())

// Api listen to Clerk WebHook 

app.use('/api/clerk', clerkWebhooks)

// MongoDB URI
const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.1j9mur9.mongodb.net/${process.env.DB_NAME}`;

mongoose.connect(URI)
  .then(() => console.log("✅ Database Connected"))
  .catch((err) => console.error("❌ Database Error:", err));


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`🚀 Example app listening on port http://localhost:${port}`);
});
