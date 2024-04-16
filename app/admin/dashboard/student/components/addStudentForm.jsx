"use client";
import { createStudent } from "@/app/lib/actions";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


export default function AddStudentForm({statuses}){
    const router = useRouter();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const formData = new FormData(e.target);
            const student = await createStudent(formData);

            if(!student) return toast.error("Cannot add student");
            toast.success("student added successfully");

            return router.push("/admin/dashboard/student")
        } catch (error) {
            toast.error("An error occured")
        }
    }

    return(
        <div className="w-50">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label">Student Name</label>
                            <input name="name" className="form-control" placeholder="enter student name"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label">E-Mail</label>
                            <input name="email" className="form-control" placeholder="enter student e-mail"/>
                        </div>
                        <div classNnameame="form-group">
                            <label className="form-label">Matric Number</label>
                            <input name="matric" className="form-control" placeholder="enter student matric Number"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Phone</label>
                            <input name="phone" className="form-control" placeholder="enter student phone number"/>
                        </div>
                        <div className="form-group my-3">
                            <label className="form-label">Current Status</label>
                            <select name="statusId" className="form-control">
                                {
                                    statuses.map((status,idx)=>(
                                        <option value={status.id} key={idx}>{status.title}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Department</label>
                            <input name="department" className="form-control" placeholder="enter student department"/>
                        </div>
                        <div className="form-group mt-3">
                            <button type="stubmit" className="btn btn-success w-100">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
    )
}