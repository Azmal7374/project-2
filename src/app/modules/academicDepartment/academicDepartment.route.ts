
import express from 'express';
import { AcademicDepartmentValidation } from './academicDeaprtment.validation';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicDepartmentControllers } from './academicDepartment.controller';

const router = express.Router()


router.post('/create-academic-department', 
// validateRequest(AcademicDepartmentValidation.createAcademicDepartmentValidationSchema),
AcademicDepartmentControllers.createAcademicDepartment,
)

router.get('/:departmentId', AcademicDepartmentControllers.getSingleAcademicDepartments);



router.patch('/:departmentId', validateRequest(AcademicDepartmentValidation.updateAcademicDepartmentValidationSchema),
AcademicDepartmentControllers.updateAcademicDepartments,
)

router.get('/', AcademicDepartmentControllers.getAllAcademicDepartments);


export const AcademicDepartmentRoutes = router
