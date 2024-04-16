"use client"
import { FaEdit, FaTrash } from "react-icons/fa";
import { useRouter } from "next/navigation";


export default function StudentRow({id,student}){
    const router = useRouter();

    return(
        <tr key={id}>
            <td>{id}</td>
            <td>{student.name}</td>
            <td>{student.matric}</td>
            <td>{student.status.title}</td>
            <td className="d-flex gap-2">
                <button className="btn btn-primary" onClick={()=>router.push(`/admin/dashboard/student/edit/${student.id}`)}>
                    <FaEdit/>
                </button>
                <button className="btn btn-danger">
                    <FaTrash/>
                </button>
            </td>
        </tr>
    )
}