import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicFacultyValidation } from './academicFaculty.validation';
import { AcademicFacultyControllers } from './academicFaculty.controller';

const router = express.Router();

router.post('/create-academic-faculty', validateRequest(
    AcademicFacultyValidation.createAcademicFacultyValidationSchema
),
AcademicFacultyControllers.crateAcademicFaculty
)


router.get('/:facultyId',AcademicFacultyControllers.getSingleAcademicFaculty)


router.patch('/:facultyId',validateRequest(AcademicFacultyValidation.updateAcademicFacultyValidationSchema),
AcademicFacultyControllers.updateAcademicFaculties)

router.get('/', AcademicFacultyControllers.getAllAcademicFaculties);


export const AcademicFacultyRoutes = router