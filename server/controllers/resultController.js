import resultModel from '../models/resultModel.js';

/** get all result */
export const getResult = async (req, res) => {
  try {
    const r = await resultModel.find();
    res.json({ status: true, r });
  } catch (error) {
    res.json({ status: false, message: 'Error' });
  }
};

/** store all result */
export const storeResult = async (req, res) => {
  try {
    const { userName, result, attempts, points, achieved } = req.body;
    if (!userName && !result) throw new Error('Data not provided! ');
    await resultModel.create({ userName, result, attempts, points, achieved });
    res.json({ status: true, message: 'Results are saved Successfully!' });
  } catch (error) {
    res.json({ status: false, message: 'Error' });
  }
};

/** delete all result */
export const dropResult = async (req, res) => {
  try {
    await resultModel.deleteMany();
    res.json({ status: true, message: 'Results are deleted Successfully!' });
  } catch (error) {
    res.json({ status: false, message: 'Error' });
  }
};
