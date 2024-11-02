'use server'
import { SchoolType } from "@/lib/definitions";
import { createClient } from "@/utils/supabase/server";

/* auth */
export const getCurrentUser =async()=>{
  const supabase = createClient()
  const {data:{user}} = await supabase.auth.getUser()
  return {id:user?.id, email:user?.email, userRole: user?.user_metadata?.role}
}

export const handleFetchStates =async()=>{
    const response = await fetch(
      'https://nga-states-lga.onrender.com/fetch'
    );
    const jsony = await response.json();
    return JSON.stringify(jsony)
}

export const handleFetchLgas =async(state:string)=>{
  const response = await fetch(`https://nga-states-lga.onrender.com/?state=${state}`);
  const jsony = await response.json();
  return JSON.stringify(jsony)
}

export async function getSchools() {
  const supabase = createClient()
  const { data} = await supabase.from('schoolsData').select('name, location, school_id, created_at')
  return data
}

export async function getSchoolsOptions() {
  const supabase = createClient()
  const { data} = await supabase.from('schoolsData').select('name, school_id')
  return data
}

export async function getAllStudents(){
  const supabase = createClient()
  const { data} = await supabase.from('dataCaptureForStudents')
  .select('id, fullname, schoolclass, imageUrl, class_arm, created_at,  school_id (name)')
  return data
}

export const getStudentDataById =async(id:string | number | undefined)=>{
  const supabase = createClient()
  const { data} = await supabase.from('dataCaptureForStudents')
  .select().eq("id", id)
  return data?.at(0)

}

export async function getDetailedStudent(id:string | number | undefined){
  const supabase = createClient()
  const { data} = await supabase.from('dataCaptureForStudents')
  .select('*, school_id (name), author_id').eq("id", id)

  const { data:knee} = await supabase.from('profiles')
  .select('*');

  console.log("profiles:", knee)
  return data?.at(0)
}


/* auth */


