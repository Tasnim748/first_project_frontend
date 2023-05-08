import React from 'react'

import axios from "axios";
import { useState, useRef } from "react";
import { COMPANY_URL } from "../imgData";

function Company() {
    const [selectedFile, setSelectedFile] = useState(null);
    const cname=useRef();


    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const CompanyUplaod = (e) => {
        console.log(cname.current.value);
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', selectedFile);

        axios.post(COMPANY_URL, formData)
        .then((response) => {
            const url = response.data;
            const dataFly = {
                title: cname.current.value,
                url: url
            }
            axios.post(URL, dataFly)
            .then(resp => console.log(resp.data));
            cname.current.value = '';
           
        })
        .catch((error) => {
            console.log(error);
        });
    };
    return (

        <>

        <form style={{margin: '5rem'}} onSubmit={CompanyUplaod}>
            <div className="mb-3">
            <input className="form-control" accept="image/*" onChange={handleFileChange} type="file" id="formFile" />
            </div>
            <div className="mb-3">
            <input type="text" className="form-control" placeholder="Title" ref={cname} />
            </div>
            <button type="submit" className="btn btn-success">Submit</button>
        </form>

        </>

    );
}


export default Company
