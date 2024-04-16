"use client";
import { updateStudent} from "@/app/lib/actions";
import { getStudentById } from "@/app/lib/query";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


export default function EditStudentForm({statuses}){
    const [student,setStudent] = useState(null)
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [matric,setMatric] = useState("");
    const [phone,setPhone] = useState("");
    const [status,setStatus] = useState("");
    const [department,setDepartment] = useState("");
    const router = useRouter();
    const pathname = usePathname();

    const id = pathname.split("/").pop();

    useEffect(()=>{
        const getStudent = async ()=>{
            try {
                const res = await getStudentById(id);
                if(!res) return toast.error("Invalid Student Data");
                setStudent(res);
                setName(res.name);
                setEmail(res.email);
                setPhone(res.phone);
                setMatric(res.matric);
                setDepartment(res.department);
                setStatus(res.statusId);
            } catch (error) {
                toast.error("Something went wrong")
            }
        }

        getStudent();
    },[id])


    const handleSubmit = async (e)=>{
        e.preventDefault();        try {
            const formData = new FormData(e.target);
            const updatedStudent = await updateStudent(student.id,formData);
            if(!updatedStudent) return toast.error("Cannot update student");
            toast.success("student updated successfully");

            return router.push("/admin/dashboard/student")
        } catch (error) {
            console.log(error)
            toast.error("An error occured")
        }
    }

    return(
        <div className="mt-3">
            <h4>Edit Student</h4>
        <div className="w-100 mt-3 d-flex justify-content-center align-items-center">
            <div className="w-50">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-label">Student Name</label>
                                <input value={name} onChange={(e)=>setName(e.target.value)}  name="name" className="form-control" placeholder="enter student name"/>
                            </div>
                            <div className="form-group">
                                <label className="form-label">E-Mail</label>
                                <input value={email} onChange={(e)=>setEmail(e.target.value)} name="email" className="form-control" placeholder="enter student e-mail"/>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Matric Number</label>
                                <input value={matric} onChange={(e)=>setMatric(e.target.value)} name="matric" className="form-control" placeholder="enter student matric Number"/>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Phone</label>
                                <input value={phone} onChange={(e)=>setPhone(e.target.value)} name="phone" className="form-control" placeholder="enter student phone number"/>
                            </div>
                            <div className="form-group my-3">
                                <label className="form-label">Current Status</label>
                                <select value={status} onChange={(e)=>setStatus(e.target.value)} name="statusId" className="form-control">
                                    {
                                        statuses.map((status,idx)=>(
                                            <option value={status.id} key={idx}>{status.title}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Department</label>
                                <input value={department} onChange={(e)=>setDepartment(e.target.value)} name="department" className="form-control" placeholder="enter student department"/>
                            </div>
                            <div className="form-group mt-3">
                                <button type="stubmit" className="btn btn-success w-100">
                                    Submit
                                </button>
                            </div>
                        </form>
            </div>
        </div>
        </div>
    )
}