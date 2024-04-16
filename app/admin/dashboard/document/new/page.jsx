import { getStudents } from "@/app/lib/query";
import NewDocumentComponent from "../components/newDocumentComponent";




export default async function NewDocument(){
    const students = await getStudents();


    return(
        <NewDocumentComponent students={students}/>
    )
}