// "use server"
import { getStatuses } from "@/app/lib/query"

export default async function StatusRow(){

    const statuses = await getStatuses();

    return(
        statuses.length > 0 ?
            statuses.map((status,idx)=>(
                <tr>
                    <td>
                        {idx+1}
                    </td>
                    <td>
                        {status.title}
                    </td>
                    <td>
                        <button className="btn btn-danger">
                            Delete
                        </button>
                    </td>
                </tr>
            )):
            <th colSpan={3} className="text-center">
                No Data
            </th>
    )
}