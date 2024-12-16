

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function ViewForm() {
    let [products, setProducts] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:2000/Application');
                console.log("Fetched application data:", res.data);
                setProducts(res.data);
            } catch (err) {
                console.error("Error fetching data:", err);
                alert("Unable to fetch application data");
            }
        };
        fetchData();
    }, []);

    const deleteAppl = async (id, jobtitle) => {
        console.log(id, jobtitle)
        try {
            await axios.delete(`http://localhost:2000/Application/${id}`);
            alert(`${jobtitle} application deleted successfully`);
            const res = await axios.get('http://localhost:2000/Application');
            setProducts(res.data);
        } catch (err) {
            console.error("Error deleting application:", err);
            alert("Data not found or unable to delete");
        }
    };

    let navigate = useNavigate();
    const editAppl = (id) => {
        navigate(`/UpdateForm/${id}`);
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">View Applications</h1>
            <div className="row">
                {products.map((product) => (
                    <div className="col-12 col-md-4 mb-4" key={product.id}>
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <p><strong>Job Title:</strong> {product.jobtitle}</p>
                                <p><strong>Company Name:</strong> {product.companyName}</p>
                                <p><strong>Date:</strong> {product.date}</p>
                                <p><strong>Status:</strong> {product.status}</p>
                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-warning" onClick={() => editAppl(product.id)}>
                                        Update
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => deleteAppl(product.id, product.jobtitle)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
