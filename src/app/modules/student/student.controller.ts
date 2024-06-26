import { NextFunction, Request, RequestHandler, Response} from 'express';
import { StudentServices } from './student.service';
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';






const getAllStudents =catchAsync(
  async (req, res) => {
  
    // console.log(req.query)
      const result = await StudentServices.getAllStudentsFromDB(req.query);
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'All Student  Get succesfully',
        data:result,
    });
   
  }); 

const getSingleStudent= catchAsync(
  async (req, res) => {

    const {id}= req.params;
    const result = await StudentServices.getSingleStudentFromDB(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Single Student is get succesfully',
      data:result,
  })
}
)



const updatedStudent = catchAsync(
  async (req, res) => {
 
    const { id} = req.params;
    const {student} = req.body
    const result = await StudentServices.updatedStudentFromDB(id,student);
    // console.log(result);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is Updated succesfully',
      data:result,
  })
 })


const deleteStudent = catchAsync(
  async (req, res) => {
 
    const { id } = req.params;
    const result = await StudentServices.deleteleStudentFromDB( id);
    console.log(result);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is Deleted succesfully',
      data:result,
  })
 })

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  updatedStudent ,
  deleteStudent
};
