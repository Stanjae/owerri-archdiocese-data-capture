export type supaStoreImageUpload ={
        id: string;
        path: string;
        fullPath: string;

} | any

export enum GenderEnum {
        female = "female",
        male = "male"
}

export type SchoolDataType = {
        name: string | undefined;
        location: string | undefined;
}

export type EditSchoolType = SchoolDataType & {
        school_id:string | undefined;
}

export type StudentData ={
        firstname:string;
        lastname:string;
        address:string;
        dob:string;
        gender: string;
        stateOfOrigin:string;
        LGA:string;
        nextOfKin:string;
        phoneNoNextOfKin:string | number;
        school:string;
        schoolclass:string;
        classArm: string;
        userId:string | undefined
}

export type EditStudentDataType ={
        firstname:string;
        lastname:string;
        address:string;
        dob:string;
        gender: string;
        stateOfOrigin:string;
        LGA:string;
        nextOfKin:string;
        phoneNoNextOfKin:string | number;
        school:string;
        schoolclass:string;
        classArm: string;
}

export type StudentDataExtended = StudentData & {
        getImageUrl:string | undefined;

}


export type EditStudentDataExtended = EditStudentDataType & {
        id:string | number | undefined;
        getImageUrl:string | undefined;
}

export type SchoolType = {
        school_id: string | undefined;
        location: string | undefined;
        name: string | undefined;
        created_at:string | undefined;
} | any

export type TableStudentData = {
        id:any;
        fullname:string | undefined;
        schoolclass: string | undefined;
        created_at:string | undefined;
        imageUrl:any;
        class_arm:string | undefined;
        school_id:{
          name:string | undefined;
        }
      } | any

export type getStudentDataType = Omit<TableStudentData, "school_id"> & {
        address:string | undefined;
        date_of_birth:string;
        school_id:string | undefined;
        gender: string;
        state_of_origin:string;
        lga:string;
        next_of_kin:string;
        phone_next_of_kin:string | number;
}

export type DetailedStudentType = TableStudentData & {
        address:string | undefined;
        date_of_birth:string;
        gender: string;
        state_of_origin:string;
        lga:string;
        next_of_kin:string;
        phone_next_of_kin:string | number;
        author_id: { username: string},
}

/* authentication */

export type LoginType={
        email:string
        password:string
}

export type InitialStateType ={password:string, confirmPassword:string}

export type GetUserType={ id:string | undefined; email:string | undefined; userRole:string | undefined} | undefined;