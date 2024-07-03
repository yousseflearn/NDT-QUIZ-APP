import mongoose from 'mongoose';

/** result model */
const resultSchema = new mongoose.Schema({
  userName: { type: String },
  result: { type: Array, default: [] },
  attempts: { type: Number, default: 0 },
  points: { type: Number, default: 0 },
  achieved: { type: String, default: '' },
  createAt: { type: Date, default: Date.now },
});

const resultModel =
  mongoose.models.result || mongoose.model('result', resultSchema);
export default resultModel;
