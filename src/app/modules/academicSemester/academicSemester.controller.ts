import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AcademicSemesterServices } from './academicSemester.service';




const createAcademicSemester= catchAsync(async  (req, res)  => {
 

        const result = await AcademicSemesterServices.createAcademicSemesterInDB(
            req.body,
        )
    
        sendResponse(res, {
            statusCode: httpStatus.OK,  success: true,
             message: "Academic Semester is created successfully",
             data: result,
        })
    }
)


const getAllAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.getAllAcademicSemestersFromDB(
    req.query,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semesters are retrieved successfully',
  meta: result.meta,
    data: result.result,
  });
});
const getSingleAcademicSemester = catchAsync(async (req, res) => {
    const { semesterId } = req.params;
    const result =
      await AcademicSemesterServices.getSingleAcademicSemesterFromDB(semesterId);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic semester is retrieved succesfully',
      data: result,
    });
  });

  const updateAcademicSemester = catchAsync(async (req, res) => {
    const { semesterId } = req.params;
    const result = await AcademicSemesterServices.updateAcademicSemesterInToDB(
      semesterId,
      req.body,
    );
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic semester is retrieved succesfully',
      data: result,
    });
  });
  
  

export const AcademicSemesterControllers = {
    createAcademicSemester,
    getAllAcademicSemester,
    getSingleAcademicSemester,
    updateAcademicSemester
}