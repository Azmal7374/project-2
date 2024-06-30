import AppError from '../../errors/AppError';
import { academicSemesterNameCodeMapper } from './academicSemester.constant';
import { AcademicSemester } from './academicSemester.model';
import { TAcademicSemester } from "./academicSemeter.interface";


const createAcademicSemesterInDB = async(payload: TAcademicSemester) => {

    //semester name --> semester code
   

  
    if(academicSemesterNameCodeMapper[payload.name] !==payload.code) {
        throw new AppError(404,"Invalid Semester Code!", '')

    }

    const result = await AcademicSemester.create(payload);
    return result;

}

const getAllAcademicSemesterFromDB = async () =>{
    const result = await AcademicSemester.find();
    return result;
}

const getSingleAcademicSemesterFromDB = async (id: string) => {
    const result = await AcademicSemester.findById(id);
    return result;
  };


const updateAcademicSemesterInToDB = async (
    id: string,
    payload: Partial<TAcademicSemester>,

)=>{
    if(
        payload.name && payload.code &&academicSemesterNameCodeMapper[payload.name] !== payload.code
     ) {
        throw new AppError(404, "Invalid Semester Code",'')
     }
     const result = await AcademicSemester.findByIdAndUpdate({_id:id},payload, {
        new: true,
     } )
     return result;
}

export const AcademicSemesterServices = {
    createAcademicSemesterInDB,
    getAllAcademicSemesterFromDB,
    getSingleAcademicSemesterFromDB,
    updateAcademicSemesterInToDB,
}