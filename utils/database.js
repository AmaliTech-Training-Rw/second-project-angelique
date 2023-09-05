import mongoose from 'mongoose';
import dotenv from "dotenv"

dotenv.config();
const connectDB = async () => {
     try {
          await mongoose.connect(
                process.env.MONGO_URI,
              
               //"mongodb+srv://Angel:Prayer33@angeldb.ofbwpgd.mongodb.net/Music-Library-MS?retryWrites=true&w=majority",
               {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
               }
          );
          console.log('Connected to MongoDB');
     } catch (error) {
          console.error('Error connecting to MongoDB:', error);
     }
};

export default connectDB;
