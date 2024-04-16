"use client"
import Image from "next/image";
import { loginStudent } from "@/app/lib/actions";
import {toast} from "react-toastify";
import { TOKEN_NAME } from "@/app/lib/helpers";
import { useRouter } from "next/navigation";


export default function LoginForm(){

    const router = useRouter();
    const handleSubmit = async (e)=>{
        e.preventDefault()
        try {
            const formData = new FormData(e.target);
            const student = await loginStudent(formData);
            if(!student){
                return toast.error("Invalid credentials");
            }
            toast.success("Login successful")
            localStorage.setItem(TOKEN_NAME,JSON.stringify(student));
            return router.push("/student/dashboard")
        } catch (error) {
            toast.error("An Error occured");
        }
    }

    return(
        <div className="position-relative px-0" style={{
            height:"100vh",
            width:"100vw",
        }}>
            <div className="position-absolute row" style={{
                bottom:0,
                left:0,
                height:"100%",
                width:"100%"
            }}>
                <div className="col col-6"></div>
                <div className="col col-6 px-0">
                    <Image src={"/nsuk-gate-2.jpg"} height={800} width={800} style={{height:"100%",width:"100%"}}/>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center" style={{
                height:"100%",
                width:"100%",
            }}>
                <div className="card shadow-lg px-4" style={{
                    height:"60vh",
                    width:"35vw"
                }}>
                    <span className="h4 text-center my-3 fw-bold">
                        STUDENT
                    </span>
                    <div className="bg-secondary w-100" style={{height:"5px"}}/>
                    <form className="my-5" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label">Matric Number</label>
                            <input name="matric" className="form-control" placeholder="Enter student ID"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Password</label>
                            <input name="password" className="form-control" placeholder="Enter password"/>
                        </div>
                        <div className="form-group mt-3">
                            <button type="submit" className="btn btn-success w-100">
                                Login
                            </button>
                        </div>
                    </form>
                    <div className="mt-2" style={{display:"flex",justifyContent:"space-between"}}>
                        <div>
                            <input type="checkbox"/>
                            <span>Remember me</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}