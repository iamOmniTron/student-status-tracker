"use client"
import { createStatus } from "@/app/lib/actions"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"

export default async function NewStatus(){
    const router = useRouter();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const formData =  new FormData(e.target);
        try {

            const status = await createStatus(formData);
            if(!status) return toast.error("cannot create status");

            toast.success("new status created successfully");
            return router.push("/admin/dashboard/status")
        } catch (error) {
            toast.error("something went wrong");
        }
    }

    return(
        <div className="mt-3">
            <div>
                <h4>New Status</h4>
            </div>
            <div className="mt-3 w-full d-flex justify-content-center">
                <div className="w-50">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label">Status Title</label>
                            <input name="title" className="form-control" placeholder="enter status title e.g fees pending/paid"/>
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