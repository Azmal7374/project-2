import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AcademicDepartmentServies } from "./academicDepartment.service";


const createAcademicDepartment = catchAsync(async(req, res) => {
  const result = await  AcademicDepartmentServies.createAcademicDepartmentIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Department created successfully",
    data: result
  })
})


const getAllAcademicDepartments = catchAsync(async(req, res) => {
  const result = await AcademicDepartmentServies.getAllAcademicDepartmentFromDB()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Department Retrived successfully",
    data: result
  })
})


const getSingleAcademicDepartments = catchAsync(async(req, res) => {

  const{departmentId} = req.params
  const result = await AcademicDepartmentServies.getSingleAcademicDepartmentFromDB(departmentId)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Department Retrived successfully",
    data: result
  })
})



const  updateAcademicDepartments = catchAsync(async(req, res) => {

  const{departmentId} = req.params
  const result = await AcademicDepartmentServies.updateAcademicDepartmentIntoDB(
    departmentId,
    req.body,
  )
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Department Updated successfully",
    data: result
  })
})


export const  AcademicDepartmentControllers = {
  createAcademicDepartment,
  getAllAcademicDepartments,
  getSingleAcademicDepartments,
  updateAcademicDepartments
}