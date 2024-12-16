import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";



export default function From() {
    const [jobTitle, setJobTitle] = useState('');
    const [company, setCompany] = useState('');
    const [date, setdate] = useState('');
    const [application, setapplication] = useState('');
    const [force, setForce] = useState('');
    
    function addApplication() {
        axios.post('http://localhost:2000/Application')
    .then(response => {
        console.log(response.data);
        })
    .catch(error => {
        console.error(error);
        });
    }
    
    

    let navigate = useNavigate();
        
        function editApplication() {
        navigate(`/formupdate/${id}`);

            
        }

        function deleteApplication(id, jobTitle) {
            axios.delete(`http://localhost:2000/Application/${id}`)
                .then(() => {
                    alert.success(`${jobTitle} deleted successfully`);
                    setForce(force + 1); // Trigger re-render
                })
                .catch(() => {
                    alert.error('Product could not be deleted');
                });
        }



  return (
    <div>
        <form>
            <h2>Add Applcation </h2>
            <input type="text" name="Jobtitle" id="Jobtitle"  value={jobTitle} onChange={(e)=>{setJobTitle(e.target.value)}} />
            <input type="text" name="company" id="company" value={company} onChange={(e)=>{setCompany(e.target.value)}} />
            <input type="text" name="date"  id="date" value={date} onChange={(e)=>{setdate(e.target.value)}}/>
            <input type="text" name="application"  id="application" placeholder='Applied / Interviewing / Rejected' value={application} onChange={(e)=>{setapplication(e.target.value)}}/>
            <button  onClick={addApplication}id='add'>Add Application</button> 


            <button  onClick={editApplication} >Edit Application</button> 
            <button  onClick={deleteApplication} >Delete Application</button> 
        </form>
    </div>
  )
}
