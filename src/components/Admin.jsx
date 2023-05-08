import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { IMG_UPLOAD_URL, IMG_URL, COMPANY_URL, LOCAL_IMG_UPLOAD_URL, LOCAL_IMG_URL, LOCAL_COMPANY_URL } from "../imgData";

function AdminForm() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [companies, setCompanies] = useState([]);

    const titleRef = useRef();
    const descriptionRef = useRef();
    const companyRef = useRef();

    const cname = useRef();


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

    const handleCompanyFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const CompanyUplaod = (e) => {
        console.log(cname.current.value);
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', selectedFile);

        axios.post(IMG_UPLOAD_URL, formData)
        .then((response) => {
            const url = response.data;
            const dataFly = {
                title: cname.current.value,
                url: url
            }
            axios.post(COMPANY_URL, dataFly)
            .then(resp => console.log(resp.data));
            cname.current.value = '';
            setSelectedFile(null);
            e.target.companyImg.value = null;
           
        })
        .catch((error) => {
            console.log(error);
        });
    };
/*......................................................................................*/

/*......................................................................................*/
    return (
        <>

        <form style={{margin: '5rem'}} onSubmit={handleProjectUpload}>
            <div className="mb-3">
            <input className="form-control" accept="image/*" name="projectImg" onChange={handleProjectFileChange} type="file" id="formFile" />
            </div>
            <div className="mb-3">
            <input type="text" className="form-control" placeholder="Title" ref={titleRef} />
            </div>
            <div className="mb-3">
            <input type="text" className="form-control" placeholder="Description" ref={descriptionRef} />
            </div>
            <div className="mb-3">
            <label htmlFor="form-select">Company</label><br />
            <select className="form-select" aria-label="Default select example" ref={companyRef}>
                {companies.map(comp => (
                    <option value={comp.title}>{comp.title}</option>
                ))}
            </select>
            </div>
            <button type="submit" className="btn btn-success">Submit</button>
        </form>

        <form style={{margin: '5rem'}} onSubmit={CompanyUplaod}>
            <div className="mb-3">
            <input className="form-control" accept="image/*" name="companyImg" onChange={handleCompanyFileChange} type="file" id="formFile" />
            </div>
            <div className="mb-3">
            <input type="text" className="form-control" placeholder="Title" ref={cname} />
            </div>
            <button type="submit" className="btn btn-success">Submit</button>
        </form>

        </>

    );
}

export default AdminForm;