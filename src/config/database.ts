import mongoose from "mongoose";

const mongoURI = String(process.env.URLCONN);
const connectDB = async () => {
    try {
      await mongoose.connect(mongoURI);
      console.log('Conectado ao MongoDB');
    } catch (error) {
      console.error('Erro ao conectar ao MongoDB:', error);
      process.exit(1);
    }
  };
  
export default connectDB;
