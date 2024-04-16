"use client"
import DonutChart from "react-donut-chart"
import {useState,useEffect} from "react";
import { TOKEN_NAME } from "@/app/lib/helpers";
import { useRouter } from "next/navigation";


export default function StatusPage(){
    const [student,setStudent] = useState(null);
    const router = useRouter();

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
                <h3 className="text-light">User Status</h3>
            </div>

            <div className="card shadow-lg p-2" style={{
                height:"50vh",
                width:"100%"
            }}>
                <div className="d-flex justify-content-between pr-4" style={{height:"100%",gap:"200px"}}>
                    <div className="" style={{
                        height:"100%",
                        width:"30vw"
                    }}>
                        <DonutChart colors={["green"]} className="h-100" data={[
                            {
                            label: student?.status?.title??"Current Statuse",
                            value: 50,
                            },
                        ]}/>
                    </div>
                    <div className="card p-2" style={{
                        height:"100%",
                        width:"100%"
                    }}>
                        <h4>Details</h4>
                        <div>
                            <div className="d-flex my-2">
                                <span>Student Name: </span>
                                <span>{student?.name}</span>
                            </div>
                            <div className="d-flex my-2">
                                <span>Current Status: </span>
                                <span>{student?.status?.title}</span>
                            </div>
                            <div className="mt-4">
                                <button className="btn btn-success" onClick={()=>router.push("/student/dashboard/documents")}>
                                    View Documents
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}