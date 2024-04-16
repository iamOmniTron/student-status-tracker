
import { getStudents } from "@/app/lib/query";
import AddStudentButton from "./components/addStudentButton";
import StudentRow from "./components/studentsRow";



export default async function StudentsPage(){

    const students = await getStudents();

    return(
        <div className="mt-4">
            <div className="d-flex justify-content-between px-2">
                <h4>Students</h4>
                <AddStudentButton/>
            </div>
            <div className="mt-4">
                <table className="table table-hover table-striped">
                    <thead>
                        <tr>
                        <td className="fw-bold">S/N</td>
                            <td className="fw-bold">Full name</td>
                            <td className="fw-bold">Matric Number</td>
                            <td className="fw-bold">Status</td>
                            <td className="fw-bold">Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((student,idx)=>(
                                <StudentRow id={idx+1} student={student}/>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}