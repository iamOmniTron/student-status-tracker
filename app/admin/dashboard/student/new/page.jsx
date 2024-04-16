"use server";

import AddStudentForm from "../components/addStudentForm"
import { getStatuses } from "@/app/lib/query";


export default async function NewStudent(){

    const statuses = await getStatuses()

    return(
        <div className="mt-4">
            <div className="">
                <h4 className="text-center">Add Student</h4>
            </div>
            <div className="mt-4 w-100 d-flex justify-content-center ">
                <AddStudentForm statuses={statuses}/>
            </div>
        </div>
    )
}