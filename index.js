import express from "express";
import connectDB from './utils/database.js';
import userRoutes from "./routes/userRoute.js"
const app = express();
app.use(express.json()); 
app.use('/api/users', userRoutes);
const PORT = 3001;
connectDB().then(() => {
     app.listen(PORT, () => {
         console.log(`Server is running on port ${PORT}`);
     });
 });



