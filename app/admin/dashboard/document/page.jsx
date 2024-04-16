import { getDocuments } from "@/app/lib/query";
import NewDocumentButton from "./components/newDocumentButton";
import DocumentRow from "./components/documentRow";


export default async function DocumentsPage(){
    const documents = await getDocuments();

    return(
        <div className="mt-4">
            <div className="d-flex justify-content-between px-2">
                <h4>Students Document</h4>
                <NewDocumentButton/>
            </div>
            <div className="mt-4">
                <table className="table table-hover table-striped">
                    <thead>
                        <tr>
                        <td className="fw-bold">S/N</td>
                            <td className="fw-bold">Document Name</td>
                            <td className="fw-bold">Student</td>
                            <td className="fw-bold">Uploaded On</td>
                            <td className="fw-bold">Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            documents.length > 0 ?
                            documents.map((document,idx)=>(
                                <DocumentRow id={idx+1} key={idx} document={document}/>
                            )):
                            <th colSpan={5} className="text-center">
                                No Data
                            </th>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}