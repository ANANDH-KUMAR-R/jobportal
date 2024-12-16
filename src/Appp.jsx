import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import { ViewForm } from "./Compoments/ViewForm";
import { UpdateForm } from "./Compoments/UpdateForm";
import { HomeForm } from "./Compoments/HomeForm";

export function Appp() {
    return(
        <div>
            <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Landing />} /> */}
                {/* <Route path="/Login" element={<Login/>} /> */}
                <Route path="/" element={<HomeForm/>} />
                <Route path="/ViewForm" element={<ViewForm/>}/>
                <Route path="UpdateForm/:id" element={<UpdateForm/>}/>


            </Routes>
            </BrowserRouter>

        </div>
    )
    
}