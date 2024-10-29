import { object, string, nativeEnum, number} from "zod"
import {GenderEnum} from './definitions'
 
export const signInSchema = object({
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
})

export const SchoolDataSchema = object({
  name: string({ required_error: "School name is required" }).min(2, "School name is empty"),
  location: string({ required_error: "School location is required"}).min(2, "School location is empty")
})

export const EditSchoolDataSchema = object({
  school_id:string({required_error:"School ID is required"}),
  name: string({ required_error: "School name is required" }).min(2, "School name is empty"),
  location: string({ required_error: "School location is required"}).min(2, "School location is empty")
})

export const StudentDataSchema = object({
    firstname: string({ required_error: "firstname is required" })
    .min(3, "First Name is too short"),
    lastname: string({ required_error: "lastname is required" })
    .min(3, "Last Name is too short"),
    address: string().min(3, "Residential Address is too short"),
    gender: string({ required_error: "Gender is should be male or female" }),
    dob: string({ required_error: "date of birth is required" }),
    stateOfOrigin:string({ required_error: "state is required" }),
    LGA:string({ required_error: "LGA is required" }),
    nextOfKin:string({ required_error: "Next-of-Kin is required" }),
    phoneNoNextOfKin:string({ required_error: "Phone Number is required" }),
    school:string({ required_error: "School is required" }),
    schoolclass:string({ required_error: "Class is required" }),
    classArm: string({ required_error: "Class Arm is required" }),
  })

  export const StudentDataSchemaExtended = StudentDataSchema.extend({
    getImageUrl:string({required_error:"image url is required"}).min(3, "image url is too short")
  })


  export const EditStudentDataSchemaExtended = StudentDataSchemaExtended.extend({
    id:number()
  })



/* auth */

const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
);


export const LoginSchema = object({
  email: string().min(3).email({message:"email is not valid"}),
  password: string().min(6, { message: 'Must have at least 6 character' })
  .regex(passwordValidation, {
    message: 'Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character',
  }),
})

export const RegisterSchema = object({
  email: string().min(3).email({message:"email is not valid"}),
  password: string().min(6, { message: 'Must have at least 6 character' })
  .regex(passwordValidation, {
    message: 'Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character',
  }),
})

export const ResetPwSchema = object({
  password: string().min(6, { message: 'Must have at least 6 character' })
  .regex(passwordValidation, {
    message: 'Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character',
  }),
  confirmPassword: string().min(6),
}).refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"],
    })

/* ; */
