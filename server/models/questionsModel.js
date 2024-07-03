import mongoose from 'mongoose';

/** question model */
const questionSchema = new mongoose.Schema({
  questions: {
    type: Array,
    default: [],
  },
  answers: {
    type: Array,
    default: [],
  },
  createAt: { type: Date, default: Date.now },
});

const questionsModel =
  mongoose.models.questions || mongoose.model('Question', questionSchema);
export default questionsModel;
