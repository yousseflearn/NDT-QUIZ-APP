import { Router } from 'express';
import {
  dropQuestions,
  getQuestions,
  insertQuestions,
} from '../controllers/questionController.js';
import {
  getResult,
  storeResult,
  dropResult,
} from '../controllers/resultController.js';

const router = Router();

/** questions routes */
router
  .route('/questions')
  .get(getQuestions) /** get all questions */
  .post(insertQuestions) /** inset all questions */
  .delete(dropQuestions); /** delete all questions */

router
  .route('/result')
  .get(getResult) /** get all result */
  .post(storeResult) /** store all result */
  .delete(dropResult); /**  delete all result */

export default router;
