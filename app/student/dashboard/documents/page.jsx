"use client"
import {FaEdit, FaEye, FaTrash} from "react-icons/fa"
import {useState,useEffect} from "react";
import { TOKEN_NAME } from "@/app/lib/helpers";
import { getMyDocuments } from "@/app/lib/query";

const SERVER_URL = "http://localhost:3000";

export default function DocumentsPage(){

    const [documents,setDocuments] = useState([]);


    useEffect(()=>{
        const runOnInit = async ()=>{
            const data = localStorage.getItem(TOKEN_NAME);
            const userId = JSON.parse(data).id;
            const res = await getMyDocuments(userId);
            setDocuments(res);
        }
        runOnInit();
    },[])

    return(
        <div className="container">
            <div className="my-4  p-2" style={{
                backgroundColor:"lightgray"
            }}>
                <h3 className="text-light">User Documents</h3>
            </div>
            <div className="mt-5">
                <table className="table table-hover table-striped">
                    <thead>
                        <tr>
                            <td>
                                S/N
                            </td>
                            <td>
                                Name
                            </td>
                            <td>
                                Uploaded On
                            </td>
                            <td>
                                Actions
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            documents.length > 0 ?
                            documents.map((d,idx)=>(

                            <tr key={idx}>
                                <td>{idx+1}</td>
                                <td>{d.name}</td>
                                <td>{new Date(d.createdAt).toDateString()}</td>
                                <td>
                                    <button className="btn btn-warning text-light" onClick={()=>window.open(`${SERVER_URL}/${d.url.split("\\").pop()}`,"_blank")}>
                                        <FaEye/>
                                        View
                                    </button>
                                </td>
                            </tr>
                            )):
                            <th colSpan={5} className="text-center">
                                    No Data Available
                            </th>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}