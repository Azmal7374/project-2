import { z } from "zod";



const preReuisiteCourseValidationSchema = z.object({
    course:z.string(),
    isDeleted: z.boolean().optional()
})

const createCourseValidationSchema = z.object({
    body: z.object({
       title: z.string(),
       prefix: z.string(),
       code: z.number(),
       credits: z.number(),
       preReuisiteCourses: z.array(preReuisiteCourseValidationSchema).optional(),
       isDeleted: z.boolean().optional(),
    })
})




const updatePreReuisiteCourseValidationSchema = z.object({
    course:z.string(),
    isDeleted: z.boolean().optional()
})

const updateCourseValidationSchema = z.object({
    body: z.object({
       title: z.string().optional(),
       prefix: z.string().optional(),
       code: z.number().optional(),
       credits: z.number().optional(),
       preReuisiteCourses: z.array(updatePreReuisiteCourseValidationSchema).optional(),
       isDeleted: z.boolean().optional(),
    })
})

const facultiesWithCourseValidationSchema = z.object({
    body: z.object({
      faculties: z.array(z.string()),
    }),
  });


export const  CourseValidations = {
    createCourseValidationSchema,
    updateCourseValidationSchema,
    facultiesWithCourseValidationSchema,
}