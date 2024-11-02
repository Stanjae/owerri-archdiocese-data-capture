"use server";

import { encodedRedirect } from "@/utils/utils";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { EditSchoolType, SchoolDataType, StudentDataExtended, EditStudentDataExtended, LoginType, InitialStateType } from "@/lib/definitions";
import { EditSchoolDataSchema, SchoolDataSchema, StudentDataSchemaExtended, EditStudentDataSchemaExtended, LoginSchema, ResetPwSchema } from "@/lib/zod";
import { revalidatePath } from "next/cache";

export const signUpAction = async (formData: LoginType) => {
  const supabase = createClient();
  const origin = headers().get("origin");

  const validatedFields = LoginSchema.safeParse(formData);

  if (!validatedFields.success) {
    return {
      status: 400, message: 'Missing Fields. Failed to Sign up.',
    };
  }
  const {email, password} = validatedFields.data

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/dashboard`,
    },
  });

  if (error) {
    return { status:500, message:error?.message}
    //return encodedRedirect("error", "/sign-up", error.message);
    //console.error(error.code + " " + error.message);
  } else {
    return encodedRedirect(
      "success",
      "/email-confirmation",
      "Thanks for signing up! Please check your email for a verification link.",
    );
  }
};

export const signInAction = async (formData: LoginType) => {
  const supabase = createClient();

  const validatedFields = LoginSchema.safeParse(formData);

  if (!validatedFields.success) {
    return {
      status: 400, message: 'Missing Fields. Failed to Login.',
    };
  }
  const {email, password} = validatedFields.data

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { status:500, message:error?.message}
    //return encodedRedirect("error", "/sign-in", error.message);
  }

  return { status:200, message:"Logged in Sucessfully"}
};

export const forgotPasswordAction = async (prevState: any, formData: FormData) => {
  const email = formData.get("email")?.toString();
  const supabase = createClient();
  const origin = headers().get("origin");
  const callbackUrl = formData.get("callbackUrl")?.toString();

  if (!email) {
    return encodedRedirect("error", "/forgot-password", "Email is required");
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?redirect_to=/protected/reset-password`,
  });

  if (error) {
    console.error(error.message);
    return encodedRedirect(
      "error",
      "/forgot-password",
      "Could not reset password",
    );
  }

  if (callbackUrl) {
    return redirect(callbackUrl);
  }

  return encodedRedirect(
    "success",
    "/forgot-password",
    "Check your email for a link to reset your password.",
  );
};

export const resetPasswordAction = async (formData: InitialStateType) => {
  const supabase = createClient();

  const validatedFields = ResetPwSchema.safeParse(formData);
  let response;

  if (!validatedFields.success) {
    return {
      status: 400, message: 'Passwords do not match!.',
    };
  }

  const {password} = validatedFields.data

  /* if (password !== confirmPassword) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Passwords do not match",
    );
  } */

  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Password update failed",
    );
  }

  encodedRedirect("success", "/protected/reset-password", "Password updated");
};

export const signOutAction = async () => {
  const supabase = createClient();
  await supabase.auth.signOut();
  return redirect("/sign-in");
};


/* ----------------------------------for crud operations---------------------------------------- */

/* for schools data */

export const createSchool = async(formData:SchoolDataType)=>{
  const supabase = createClient();
  const validatedFields = SchoolDataSchema.safeParse(formData);
  let response;

  if (!validatedFields.success) {
    return {
      status: 400, message: 'Missing Fields. Failed to Create Schools.',
    };
  }
  const {name, location} = validatedFields.data
  const { error } = await supabase.from('schoolsData').insert({ name, location })

  if(!error){
    response = {status:201, message:"School created sucessfully"}
  }else{
    response = {status:500, message:`${error?.message}`}
  }
  revalidatePath('/dashboard/schools')
  return response
}


export const editSchool = async(formData:EditSchoolType)=>{
  const supabase = createClient();
  const validatedFields = EditSchoolDataSchema.safeParse(formData);
  let response;

  if (!validatedFields.success) {
    return {
      status: 400, message: 'Missing Fields. Failed to update Schools.',
    };
  }
  const {name, location, school_id} = validatedFields.data

  const { error } = await supabase.from('schoolsData').update({ name, location }).eq('school_id', school_id)

  if(!error){
    response = {status:201, message:"School Updated sucessfully"}
  }else{
    response = {status:500, message:`${error?.message}`}
  }
  revalidatePath('/dashboard/schools')
  return response
}

export const deleteSchool = async(id:string | undefined)=>{
  const supabase = createClient();
  let response;
  const {status, statusText } = await supabase.from('schoolsData').delete().eq('school_id', id)

  if(status == 204){
    response = {code:201, message:"School deleted sucessfully"}
  }else{
    response = {code:500, message:`${statusText}`}
  }
  revalidatePath('/dashboard/schools')
  return response
}


/* for students  */

export const createStudent = async(formData:StudentDataExtended)=>{
  const supabase = createClient();
  const validatedFields = StudentDataSchemaExtended.safeParse(formData);
  let response;

  if (!validatedFields.success) {
    
    return {
      status: 400, message: validatedFields.error.errors.at(0)?.message,
    };
  }
  const {firstname, lastname, address, gender, dob, stateOfOrigin, LGA, nextOfKin,
         phoneNoNextOfKin, school, schoolclass, classArm, getImageUrl, userId} = validatedFields.data
  
  const fName = firstname + " " + lastname

  const { error } = await supabase.from('dataCaptureForStudents')
  .insert({ fullname: fName, address, gender, schoolclass, imageUrl:getImageUrl, class_arm:classArm, 
    phone_next_of_kin:phoneNoNextOfKin, date_of_birth:dob, state_of_origin:stateOfOrigin, lga:LGA,
    next_of_kin:nextOfKin, school_id:school, author_id:userId
   })

  if(!error){
    response = {status:201, message:"Student's Profile was created sucessfully"}
  }else{
    response = {status:500, message:`${error?.message}`}
  }
  revalidatePath('/dashboard/all-records')
  return response
}


export const deleteStudent = async(id:string | undefined)=>{
  const supabase = createClient();
  let response;
  const {status, statusText } = await supabase.from('dataCaptureForStudents').delete().eq('id', id)

  if(status == 204){
    response = {code:201, message:"Student deleted sucessfully"}
  }else{
    response = {code:500, message:`${statusText}`}
  }
  revalidatePath('/dashboard/all-records')
  return response
}



export const updateStudent = async(formData:EditStudentDataExtended)=>{
  const supabase = createClient();
  const validatedFields = EditStudentDataSchemaExtended.safeParse(formData);
  let response;

  if (!validatedFields.success) {
    return {
      status: 400, message: 'Missing Fields. Failed to update Student.',
    };
  }
  const {firstname, id, lastname, address, gender, dob, stateOfOrigin, LGA, nextOfKin,
         phoneNoNextOfKin, school, schoolclass, classArm, getImageUrl} = validatedFields.data
  
  const fName = firstname + " " + lastname

  const { error } = await supabase.from('dataCaptureForStudents')
  .update({ fullname: fName, address, gender, schoolclass, imageUrl:getImageUrl, class_arm:classArm, 
    phone_next_of_kin:phoneNoNextOfKin, date_of_birth:dob, state_of_origin:stateOfOrigin, lga:LGA,
    next_of_kin:nextOfKin, school_id:school
   }).eq('id', id).select()

  if(!error){
    response = {status:201, message:"Student's Profile was Updated sucessfully"}
  }else{
    response = {status:500, message:`${error?.message}`}
  }
  revalidatePath('/dashboard/all-records')
  return response
}

