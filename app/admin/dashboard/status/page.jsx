import { getStatuses } from "@/app/lib/query";
import StatusRow from "./components/statusesRow";
import NewStatusButton from "./components/newStatusButton";



export default function StatusesPage(){


    return(
        <div className="mt-4">
            <div className="d-flex justify-content-between px-2">
                <h4>Statuses</h4>
                <NewStatusButton/>
            </div>
            <div className="mt-4">
                <table className="table table-hover table-striped">
                    <thead>
                        <tr>
                            <td className="fw-bold">S/N</td>
                            <td className="fw-bold">Status Title</td>
                            <td className="fw-bold">Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        <StatusRow/>
                    </tbody>
                </table>
            </div>
        </div>
    )
}