"use client"

import { uploadDocument } from "@/app/lib/actions";
import { toast } from "react-toastify"


export default function NewDocumentComponent({students}){

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const formData = new FormData(e.target);
            const res = await uploadDocument(formData);
        } catch (error) {
            toast.error("Something went wrong")
        }
    }

    return(
        <div className="mt-3">
            <h4>New Document</h4>
            <div className="mt-3 w-100 d-flex justify-content-center">
                <div className="w-50">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label">Document Name</label>
                            <input name="name" className="form-control" placeholder="enter document name"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Student</label>
                            <select name="userId" className="form-control">
                                {
                                    students.map((student,idx)=>(
                                        <option value={student.id} key={idx}>{student.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Document</label>
                            <input name="file" type="file" className="form-control"/>
                        </div>
                        <div className="mt-3">
                            <button type="submit" className="btn btn-success w-100">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}