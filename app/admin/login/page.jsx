"use client";
import { loginStudent } from "@/app/lib/actions";
import Image from "next/image";
import {toast} from "react-toastify";




export default function LoginPage(){




    return(
        <div className="p-3" style={{
            height:"100vh",
            width:"100vw"
        }}>
            <div className="w-100 h-100 d-flex p-5">
                <div className="d-flex flex-column justify-content-center align-items-center" style={{
                    height:"100%",
                    width:"100%"
                }}>
                    <h2 className="shadow-md">Student Status Tracker</h2>
                    <span className="block">Administrator Login</span>
                </div>
                <div className="bg-secondary" style={{
                    height:"100%",
                    width:"10px"
                }}/>
                <div className="d-flex flex-column justify-content-center align-items-center" style={{
                    height:"100%",
                    width:"100%"
                }}>
                    <div className="rounded-circle bg-warning" style={{
                        height:"100px",
                        width:"100px"
                    }}>
                        <Image src={"/nsuk-logo.jpg"} height={100} width={100}/>
                    </div>
                    <div className="card my-2 p-3 shadow-lg" style={{
                        height:"40vh",
                        width:"30vw"
                    }}>
                        <form className="form">
                            <div className="form-group">
                                <label className="form-label">User ID</label>
                                <input  className="form-control" placeholder="enter admin User ID..."/>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Password</label>
                                <input  className="form-control" type="password" placeholder="enter admin password..."/>
                            </div>
                            <div className="form-group mt-3">
                                <button className="btn btn-success w-100">
                                    LOGIN
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}