"use client"
import { FaEye, FaTrash } from "react-icons/fa";


const SERVER_URL = "http://localhost:3000";

export default function DocumentRow({id,document}){

    return(
        <tr>
            <td>{id}</td>
            <td>{document?.name}</td>
            <td>{document?.user?.name}</td>
            <td>{new Date(document?.createdAt).toDateString()}</td>
            <td className="d-flex gap-2">
                <button className="btn btn-danger">
                    <FaTrash/>
                </button>
                <button className="btn btn-success" onClick={()=>window.open(`${SERVER_URL}/${document.url.split("\\").pop()}`,"_blank")}>
                    <FaEye/>
                </button>
            </td>
        </tr>
    )
}