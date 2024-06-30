import express from 'express';
import { StudentControllers } from './student.controller';
import validateRequest from '../../middlewares/validateRequest';
import { updateStudentValidationSchema } from './student.validation';
import auth from '../../middlewares/auth';

const router = express.Router();



router.get('/', StudentControllers.getAllStudents)

router.get('/:id',auth('admin', 'faculty'),StudentControllers.getSingleStudent)

router.delete('/:id',StudentControllers.deleteStudent)

router.patch('/:id',validateRequest(updateStudentValidationSchema),StudentControllers.updatedStudent)

export const StudentRoutes = router;