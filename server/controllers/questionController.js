import questionsModel from '../models/questionsModel.js';
import questions, { answers } from '../database/data.js';

/** get all questions */
export const getQuestions = async (req, res) => {
  try {
    const q = await questionsModel.find();
    res.json(q);
  } catch (error) {
    res.json({ message: 'Error' });
  }
};
/** insert questions */
export const insertQuestions = async (req, res) => {
  try {
    questionsModel.insertMany({ questions: questions, answers: answers });
    res.json({ message: 'data saved successfully' });
  } catch (error) {
    res.json({ message: 'Error' });
  }
};
/** delete questions */
export const dropQuestions = async (req, res) => {
  try {
    await questionsModel.deleteMany();
    res.json({ message: 'all questions are deleted from db ' });
  } catch (error) {
    res.json({ message: 'Error' });
  }
};
