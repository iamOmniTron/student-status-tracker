"use client"
import { TOKEN_NAME } from "@/app/lib/helpers";
import {useEffect,useState} from "react";
import { FaUser } from "react-icons/fa6";




export default function Dashboard(){
    const [student,setStudent] = useState(null);

    useEffect(()=>{
        const data = localStorage.getItem(TOKEN_NAME);
        const user = JSON.parse(data);
        setStudent(user);
    },[])

    return(
        <div className="container">
            <div className="my-4  p-2" style={{
                backgroundColor:"lightgray"
            }}>
                <h3 className="text-light">User Profile</h3>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-column mt-5 gap-4">
                <div>
                    <div className="rounded rounded-" style={{
                        height:"100px",
                        width:"100px"
                    }}>
                        <FaUser style={{fontSize:100}}/>
                    </div>
                </div>
                <div>
                    <div className="" style={{
                        height:"40vh",
                        width:"40vw"
                    }}>
                        <div className="card border border-1 px-3" style={{
                            height:"100%",
                            width:"100%"
                        }}>
                            <div className="mt-4">
                                <div className="d-flex align-items-center my-3">
                                    <span className="fw-bold">Name :</span>
                                    <span className="">{student?.name}</span>
                                </div>
                                <div className="d-flex align-items-center my-3">
                                    <span className="fw-bold">E-mail :</span>
                                    <span className="">{student?.email}</span>
                                </div>
                                <div className="d-flex align-items-center my-3">
                                    <span className="fw-bold">Phone :</span>
                                    <span className="">{student?.phone}</span>
                                </div>
                                <div className="d-flex align-items-center my-3">
                                    <span className="fw-bold">Matric :</span>
                                    <span className="">{student?.matric}</span>
                                </div>
                                <div className="d-flex align-items-center my-3">
                                    <span className="fw-bold">Current Status :</span>
                                    <span className="">
                                        <div className="badge text-bg-success">
                                           {student?.status?.title}
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}