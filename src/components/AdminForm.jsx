import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { IMG_UPLOAD_URL, IMG_URL, COMPANY_URL, LOCAL_IMG_UPLOAD_URL, LOCAL_IMG_URL, LOCAL_COMPANY_URL } from "../imgData";

function AdminForm() {
    // this is for project and company home image file
    const [selectedFile, setSelectedFile] = useState(null);

    // this is for company about file
    // const [aboutFile, setAboutFile] = useState(null);


    const [companies, setCompanies] = useState([]);

    const titleRef = useRef();
    const descriptionRef = useRef();
    const companyRef = useRef();

    // const cname = useRef();
    // const cDescriptionRef = useRef();


    useEffect(() => {
        fetch(COMPANY_URL)
            .then(resp => resp.json())
            .then(data => setCompanies(data))
            .catch(e => alert('failed to load companies!'))
    }, []);

    // only for project handle

    const handleProjectFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleProjectUpload = (e) => {
        console.log(titleRef.current.value, descriptionRef.current.value);
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', selectedFile);

        axios.post(IMG_UPLOAD_URL, formData)
        .then((response) => {
            const url = response.data;
            const dataFly = {
                title: titleRef.current.value,
                description: descriptionRef.current.value,
                company: companyRef.current.value,
                url: url
            }
            axios.post(IMG_URL, dataFly)
            .then(resp => console.log(resp.data));
            titleRef.current.value = '';
            descriptionRef.current.value = '';
            setSelectedFile(null);
            e.target.projectImg.value = null;
        })
        .catch((error) => {
            console.log(error);
        });
    };


    // only for company data handle

    // const handleCompanyFileChange = (event) => {
    //     setSelectedFile(event.target.files[0]);
    // };

    // const handleAboutFileChange = (event) => {
    //     setAboutFile(event.target.files[0]);
    // };

    // const CompanyUplaod = (e) => {
    //     console.log(cname.current.value);
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append('image', selectedFile);

    //     axios.post(IMG_UPLOAD_URL, formData)
    //     .then((response) => {
    //         const url = response.data;
    //         const dataFly = {
    //             title: cname.current.value,
    //             url: url
    //         }
    //         axios.post(COMPANY_URL, dataFly)
    //         .then(resp => console.log(resp.data));
    //         cname.current.value = '';
    //         setSelectedFile(null);
    //         e.target.companyImg.value = null;
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // };
/*......................................................................................*/

/*......................................................................................*/
    return (
        <>
            <form style={{paddingTop: '2%', margin: '3rem'}} onSubmit={handleProjectUpload}>
                <div className="mb-3">
                <input className="form-control" accept="image/*" name="projectImg" required onChange={handleProjectFileChange} type="file" id="formFile" />
                </div>

                <div className="mb-3">
                <input type="text" required className="form-control" placeholder="Title" ref={titleRef} />
                </div>

                <div className="mb-3">
                <input type="text" required className="form-control" placeholder="Description" ref={descriptionRef} />
                </div>

                <div className="mb-3">
                <br /><br />
                <div style={{paddingBottom: '10px'}}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="24" width="24" height="24" rx="12" transform="rotate(90 24 0)" fill="black"/>
                    <path d="M17.2498 5.75L17.2498 17.25L5.74975 17.25" stroke="white" stroke-width="2"/>
                    <path d="M17.0833 17.0835L6.08325 6.0835" stroke="white" stroke-width="2"/>
                    </svg> Studio
                </div>
                <select className="form-select" aria-label="Default select example" ref={companyRef}>
                    {companies.map(comp => (
                        <option value={comp.title}>{comp.title}</option>
                    ))}
                </select>
                </div>
                <div className="d-grid gap-2">
                <button type="submit" style={{background: 'black', color: 'white', border: 'none', padding: '5px'}}>Submit</button>
                </div>
            </form>
            <br />
        </>
    );
}

export default AdminForm;