import { z } from "zod";



const createAcademicDepartmentValidationSchema = z.object({
 body: z.object({
    name: z.string({
     invalid_type_error: "Academic  Department name must be strig",
     required_error: 'name is required'
    }),
    academicfaculty: z.string({
        invalid_type_error:  "Academicfaculty  must be strig",
        required_error: 'Faculty is required'
    })
 })
})



const updateAcademicDepartmentValidationSchema = z.object({
    body: z.object({
       name: z.string({
        invalid_type_error: "Academic  Department name must be strig",
        required_error: 'name is required'
       }).optional(),
       academicfaculty: z.string({
           invalid_type_error:  "Academicfaculty  must be strig",
           required_error: 'Faculty is required'
       }).optional(),
    })
   })


export const AcademicDepartmentValidation ={
    createAcademicDepartmentValidationSchema,
    updateAcademicDepartmentValidationSchema
}