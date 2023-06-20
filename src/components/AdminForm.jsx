import axios from "axios";
import { Fragment } from "react";
import { useState, useRef, useEffect } from "react";
import { IMG_UPLOAD_URL, IMG_URL, COMPANY_URL, LOCAL_IMG_UPLOAD_URL, LOCAL_IMG_URL, LOCAL_COMPANY_URL } from "../imgData";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import EditModal from "./EditModal";
import {Spinner} from "react-bootstrap";

function AdminForm() {
    // this is for project and company home image file
    const [selectedFile, setSelectedFile] = useState(null);
    const [ImgData, setImgData] = useState([]);
    const [trigger, setTrigger] = useState(false);
    const [show, setShow] = useState(false);
    const [pushing, setPushing] = useState(false);

    const [img, setImage] = useState(null);

    const { studio } = useParams();
    

    useEffect(() => {
        fetch(`${IMG_URL}/${studio}`)
            .then(resp => resp.json())
            .then(data => setImgData(data))
            .catch(e => alert('failed to fetch carousel images'))
    }, [trigger]);


    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };
    
    // only for project handle
    
    const titleRef = useRef();
    const descriptionRef = useRef();
    const projectTypeRef = useRef();

    const handleProjectUpload = (e) => {
        setPushing(true);
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', selectedFile);

        console.log(projectTypeRef.current.value)

        axios.post(IMG_UPLOAD_URL, formData)
        .then((response) => {
            const url = response.data;
            const dataFly = {
                title: titleRef.current.value,
                description: descriptionRef.current.value,
                projectType: projectTypeRef.current.value,
                company: studio,
                url: url
            }
            axios.post(IMG_URL, dataFly)
                .then(resp => {
                    titleRef.current.value = '';
                    descriptionRef.current.value = '';
                    setSelectedFile(null);
                    e.target.projectImg.value = null;
                    alert('Project Uploaded Successfully!');
                    setPushing(false);
                    setTrigger(!trigger);
                })
                .catch(e => {
                    alert('info upload error');
                    setPushing(false);
                })
        })
        .catch((error) => {
            alert('image upload error');
            setPushing(false);
        });
    };


    const handleProjectDelete = (proj) => {
        axios({
            method: 'delete',
            url: IMG_URL,
            data: proj
        })
            .then(resp => {
                if (resp.status == 204) {
                    alert('deletion successful');
                    setTrigger(!trigger);
                }
            })
            .catch(e => {
                alert('deletion error');
            });
    }


    // only for company data handle
    // const cNameRef = useRef();

    // const CompanyUplaod = (e) => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append('image', selectedFile);

    //     axios.post(IMG_UPLOAD_URL, formData)
    //     .then((response) => {
    //         const url = response.data;
    //         const dataFly = {
    //             title: cNameRef.current.value,
    //             url: url
    //         }
    //         axios.post(COMPANY_URL, dataFly)
    //         .then(resp => {
    //             cNameRef.current.value = '';
    //             setSelectedFile(null);
    //             e.target.companyImg.value = null;
    //             alert('company upload successful');
    //         })
    //         .catch(e => alert('Company info upload unsuccessful'));
    //     })
    //     .catch((error) => {
    //         alert('image upload failed');
    //     });
    // };

    // modal toggle

    const openEdit = (img) => {
        setImage(img);
        setShow(!show);
    }
/*......................................................................................*/

/*......................................................................................*/

    return (
        <>
        <Row style={{margin: '4%'}}>
            <Col md={6}>
                <div style={{textAlign: 'center', padding: '30px'}}>
                    <h3>
                    {`Upload Project for ${studio}`}
                    </h3>    
                </div>
                <form style={{margin: '1rem 3rem'}} onSubmit={handleProjectUpload}>
                    <div className="mb-3">
                    <input className="form-control" accept="image/*" name="projectImg" required onChange={handleFileChange} type="file" id="formFile" />
                    </div>

                    <div className="mb-3">
                    <textarea 
                        rows={3} 
                        type="text" 
                        required 
                        className="form-control" 
                        placeholder="Title (max charachter length: 80)" 
                        ref={titleRef} 
                        maxLength={80}
                    />
                    </div>

                    <div className="mb-3">
                    <textarea 
                        rows={5} 
                        type="text" 
                        required 
                        className="form-control" 
                        placeholder="Description (max length: 350)" 
                        ref={descriptionRef}
                        maxLength={350}
                    />
                    </div>

                    <div className="mb-3">
                    <label htmlFor="projectType" className="form-label" style={{fontWeight: 'bold'}}>
                        Project Type
                    </label>
                    <select className="form-select" ref={projectTypeRef} defaultValue="Urban" id="projectType">
                        <option value="Urban">Urban</option>
                        <option value="Peripheral">Peripheral</option>
                    </select>
                    </div>

                    <div className="d-grid gap-2">
                    <button type="submit" style={{background: 'black', color: 'white', border: 'none', padding: '5px'}}>{pushing ? <Spinner animation="border" variant="light" /> : "Submit"}</button>
                    </div>
                </form>
                <br />
            </Col>  
            <Col md={6}>
                <div style={{padding: '30px'}}>
                    <h3 style={{textAlign: 'center'}}>Uploaded Projects</h3>
                </div>
                <div style={{margin: '1rem 3rem'}}>
                {ImgData.map((img, index) => (
                    <Fragment key={index}>
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="24" width="24" height="24" rx="12" transform="rotate(90 24 0)" fill="black"/>
                                <path d="M17.25 5.75L17.25 17.25L5.75 17.25" stroke="white" strokeWidth="2"/>
                                <path d="M17.0835 17.0835L6.08349 6.0835" stroke="white" strokeWidth="2"/>
                            </svg> <img src={img.url} alt={img.title} width='50px' height='40px' /> <span>{img.title} ({img.projectType})</span>
                            <div>
                            <button style={{background: 'black', color: 'white', border: 'none', padding: '0px 20px', margin: '10px'}} onClick={() => handleProjectDelete(img)}>Delete</button>
                            <button style={{background: 'black', color: 'white', border: 'none', padding: '0px 20px', margin: '10px'}} onClick={() => openEdit(img)}>Edit</button>
                            </div>
                        </div>
                        <hr />
                    </Fragment>     
                ))}
                </div>
            </Col>
        </Row>
        {img && <EditModal
            show={show}
            openEdit={openEdit}
            img={img}
            setTrigger={setTrigger}
            trigger={trigger}
        />}
        {/* <hr /> */}
        {/* <form style={{margin: '1rem 3rem'}} onSubmit={CompanyUplaod}>
            <h3 style={{textAlign: 'center', marginBottom: '50px'}}>For New Company Upload</h3>
            <div className="mb-3">
            <input className="form-control" accept="image/*" name="companyImg" required onChange={handleFileChange} type="file" id="formFile" />
            </div>

            <div className="mb-3">
            <input type="text" required className="form-control" placeholder="Title" ref={cNameRef} />
            </div>

            <div className="d-grid gap-2">
            <button type="submit" style={{background: 'black', color: 'white', border: 'none', padding: '5px'}}>Submit</button>
            </div>
        </form> */}
        </>
    );
}

export default AdminForm;