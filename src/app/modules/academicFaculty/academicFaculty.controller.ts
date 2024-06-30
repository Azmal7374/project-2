import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AcademicFacultyServies } from "./academicFaculty.service";



const crateAcademicFaculty = catchAsync(async (req, res) =>{
    const result = await AcademicFacultyServies.createAcademicFacultyToDB(req.body)

    sendResponse(res, {
        statusCode:httpStatus.OK,
        success:true,
        message: "Academic faculty created Successfully",
        data: result
    });
});


const getAllAcademicFaculties = catchAsync(async (req, res) => {
     const result = await AcademicFacultyServies.getAllAcademicFacultiesFromDB()

     sendResponse(res, {
        statusCode:httpStatus.OK,
        success:true,
        message: "Academic faculty retrived Successfully",
        data: result
    });
})


const getSingleAcademicFaculty = catchAsync(async (req, res) => {
    const { facultyId } = req.params;
    const result =
      await  AcademicFacultyServies.getSingleAcademicFacultyFromDB(facultyId);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic faculty is retrieved succesfully',
      data: result,
    });
  });
  



const updateAcademicFaculties = catchAsync(async (req, res) => {
    const  {facultyId} = req.params
    const result = await AcademicFacultyServies.updateAcademicFacultiesFromDB(
        facultyId, 
        req.body,
    )

    sendResponse(res, {
       statusCode:httpStatus.OK,
       success:true,
       message: "Academic faculty Update Successfully",
       data: result
   });
})


export const AcademicFacultyControllers= {
   crateAcademicFaculty,
   getAllAcademicFaculties,
   getSingleAcademicFaculty,
   updateAcademicFaculties
}

