"use server";

import { getStatuses } from "@/app/lib/query";
import EditStudentForm from "../../components/editStudentForm";

export default async function EditStudent(){
    const statuses = await getStatuses();

    return(
        <EditStudentForm statuses={statuses}/>
    )
}