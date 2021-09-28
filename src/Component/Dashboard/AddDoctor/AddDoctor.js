import React, { useState } from 'react';
import './AddDoctor.css'
import Sidebar from "../Sidebar/Sidebar";
const AddDoctor = () => {
    const [info,setInfo] = useState({})
    const [file,setFile] = useState(null)
    
    const haldleBlur = (e)=>{
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }
    const handleFileChange = (e)=>{
        const newFile = e.target.files[0];
        setFile(newFile)
    }
    const hadleFormSubmit = ()=>{
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('email', info.email)
        fetch('http://localhost:4000/addDoctor', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div className="container-fluid lightSky">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                <form onClick={hadleFormSubmit}>
                    <div class="mb-3">
                        <label for="exampleInputName" class="form-label">Name</label>
                        <input onBlur={haldleBlur} type="text" class="form-control" name="name" id="exampleInputName" placeholder="Your name"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" name="email" class="form-label">Email address</label>
                        <input onBlur={haldleBlur} name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Upload Image</label>
                        <input onChange={handleFileChange} type="file" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Choice Image"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;