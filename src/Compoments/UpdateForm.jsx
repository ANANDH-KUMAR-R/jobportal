import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export function UpdateForm() {
    let [jobtitle, setJobtitle] = useState('');
    let [companyName, setCompanyName] = useState('');
    let [date, setDate] = useState('');
    let [status, setStatus] = useState('');
    let params = useParams();  

    let data = { jobtitle, companyName, date, status };

    useEffect(() => {
        axios.get(`http://localhost:2000/Application/${params.id}`)
            .then((res) => {
                setJobtitle(res.data.jobtitle);
                setCompanyName(res.data.companyName);
                setDate(res.data.date);
                setStatus(res.data.status);
            })
            .catch((err) => {
                console.error(err);
                toast.error("Error fetching application details");
            });
    }, [params.id]);  
    function updateAppl(e) {
        e.preventDefault();
        axios.put(`http://localhost:2000/Application/${params.id}`, data)
            .then(() => {
                toast.success("Item Updated Successfully");
            })
            .catch((err) => {
                toast.error("Failed to update application");
                console.error(err);
            });
    }

    return (
        <div className="AdminUpdateProducts container mt-5">
            <h1 className="mb-4">Update Application</h1>
            <div className="items">
                <form className='ApplForm' onSubmit={updateAppl}>
                    <fieldset>
                        <div className="mb-3">
                            <label htmlFor="jobtitle" className="form-label">Job Title:</label>
                            <input
                                required
                                type="text"
                                id="jobtitle"
                                className="form-control"
                                value={jobtitle}
                                onChange={(e) => setJobtitle(e.target.value)}
                                placeholder="Enter the Job Title"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="companyName" className="form-label">Company Name:</label>
                            <input
                                required
                                type="text"
                                id="companyName"
                                className="form-control"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                                placeholder="Enter Company Name"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="date" className="form-label">Date:</label>
                            <input
                                required
                                type="date"
                                id="date"
                                className="form-control"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="status" className="form-label">Status:</label>
                            <input
                                required
                                type="text"
                                id="status"
                                className="form-control"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                placeholder="Enter Applied / Interviewing / Rejected"
                            />
                        </div>

                        <div className="text-center">
                            <button type="submit" className="btn btn-danger">
                                Update Application
                            </button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}
