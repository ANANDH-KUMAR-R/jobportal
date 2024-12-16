import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export function HomeForm() {
    let [jobtitle, setJobtitle] = useState('');
    let [companyName, setCompanyName] = useState('');
    let [date, setDate] = useState('');
    let [status, setStatus] = useState('');

    let data = { jobtitle, companyName, date, status };

    function addAppll(e) {
        e.preventDefault();
        axios.post('http://localhost:2000/Application', data)
            .then((res) => {
                console.log(res);
                alert("Application created successfully");
                setJobtitle('');
                setCompanyName('');
                setDate('');
                setStatus('');
            })
            .catch((err) => {
                console.error(err);
                alert("Error creating Application");
            });
    }

    return (
        <div className="container mt-5">
            <h1 className="mb-4">
                <Link to="/ViewForm" className="btn btn-primary">
                    View Application
                </Link>
            </h1>
            <h1 className="mb-4">Add Application</h1>
            <form onSubmit={addAppll} className="border p-4 shadow-sm rounded">
                <div className="mb-3">
                    <label htmlFor="jobtitle" className="form-label">
                        Job Title:
                    </label>
                    <input
                        type="text"
                        name="jobtitle"
                        className="form-control"
                        onChange={(e) => setJobtitle(e.target.value)}
                        value={jobtitle}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="companyName" className="form-label">
                        Company Name:
                    </label>
                    <input
                        type="text"
                        name="companyName"
                        className="form-control"
                        onChange={(e) => setCompanyName(e.target.value)}
                        value={companyName}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="date" className="form-label">
                        Date:
                    </label>
                    <input
                        type="date"
                        name="date"
                        className="form-control"
                        onChange={(e) => setDate(e.target.value)}
                        value={date}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="status" className="form-label">
                        Status:
                    </label>
                    <input
                        type="text"
                        name="status"
                        className="form-control"
                        onChange={(e) => setStatus(e.target.value)}
                        value={status}
                        required
                        placeholder="Enter Applied / Interviewing / Rejected"
                    />
                </div>

                <button type="submit" className="btn btn-success">ADD</button>
            </form>
        </div>
    );
}
