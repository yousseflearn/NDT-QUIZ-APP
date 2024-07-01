import mongoose from 'mongoose';
const connect = async () => {
  await mongoose.connect(process.env.DB_URL);
  console.log('database connected');
};

export default connect;
