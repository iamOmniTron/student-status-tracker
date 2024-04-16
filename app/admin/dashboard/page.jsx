import { getStudents } from "@/app/lib/query";
import { FaChevronRight, FaTrash } from "react-icons/fa";



export default  async function DashboardPage(){

    const data = await getStudents();
    return(
        <div className="mt-4">
            <div className="d-flex gap-5 " style={{
                width:"100%",
                height:"20vh"
            }}>
                <div className="" style={{height:"100",width:"100%"}}>
                    <div className="card w-100 h-100 bg-success">
                        <div className="text-white d-flex align-items-center p-3">
                            <h3>Students</h3>
                            <FaChevronRight style={{fontSize:20}}/>
                        </div>
                    </div>
                </div>
                <div className="" style={{height:"100",width:"100%"}}>
                    <div className="card w-100 h-100 bg-warning">
                    <div className="text-white d-flex align-items-center p-3">
                            <h3>Documents</h3>
                            <FaChevronRight style={{fontSize:20}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-4">
                <h4>Students Data</h4>
                <table className="table table-hover table-striped">
                    <thead>
                        <tr>
                            <td className="fw-bold">S/N</td>
                            <td className="fw-bold">Full name</td>
                            <td className="fw-bold">Matric Number</td>
                            <td className="fw-bold">Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((student,idx)=>(
                                <tr key={idx}>
                                    <td>{idx+1}</td>
                                    <td>{student.name}</td>
                                    <td>{student.matric}</td>
                                    <td>
                                        <button className="btn btn-danger">
                                            <FaTrash/>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}