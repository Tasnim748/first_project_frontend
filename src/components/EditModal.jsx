import { Modal } from "react-bootstrap";
import { useRef, useState } from "react";
import {Container} from "react-bootstrap";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import { LOCAL_IMG_URL, LOCAL_IMG_UPLOAD_URL, IMG_URL, IMG_UPLOAD_URL } from "../imgData";


function EditModal({ show, img, openEdit, trigger, setTrigger }) {
    const title = useRef();
    const description = useRef();
    const project = useRef();

    const [selectedFile, setSelectedFile] = useState(undefined);
    const [pushing, setPushing] = useState(false);

    const handleProjectFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };

    const handleSave = (e) => {
      setPushing(true);
      e.preventDefault();
      if (selectedFile) {
        const formData = new FormData();
        formData.append('image', selectedFile);
        axios.post(IMG_UPLOAD_URL, formData)
        .then((response) => {
            const url = response.data;
            const dataFly = {
              _id: img._id,
              company: img.company,
              title: title.current.value,
              description: description.current.value,
              projectType: project.current.value,
              url: url,
              oldUrl: img.url
            }
            axios({
              method: 'put',
              url: IMG_URL,
              data: dataFly
            })
            .then(resp => {
              title.current.value = '';
              description.current.value = '';
              alert('Project Updated Successfully!');
              setPushing(false)
              openEdit('');
              setTrigger(!trigger);
            })
            .catch(e => {
              alert('info update error');
              setPushing(false);
            })
        })
        .catch((error) => {
            alert('image change error');
            setPushing(false);
        });
      } else {
        const dataFly = {
          _id: img._id,
          company: img.company,
          title: title.current.value,
          description: description.current.value,
          projectType: project.current.value,
          url: img.url
        }
        axios({
          method: 'put',
          url: IMG_URL,
          data: dataFly
        }).then(resp => {
          title.current.value = '';
          description.current.value = '';
          alert('Project Updated Successfully!');
          setPushing(false);
          openEdit('');
          setTrigger(!trigger);
        })
        .catch(e => {
          alert('info update error');
          setPushing(false);
        })
      }
    } 

    return (
        <Modal show={show} onHide={() => openEdit('')} aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Edit Project: "{img.title}"
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
            <Container>
            <form onSubmit={handleSave}>
              <div className="mb-3">
                <label htmlFor="editFile" className="form-label" style={{fontWeight: 'bold'}}>Image (leave blank if you don't want to change image)</label>
                <input className="form-control" accept="image/*" onChange={handleProjectFileChange} type="file" id="editFile" />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputTitle" className="form-label" style={{fontWeight: 'bold'}}>Title</label>
                <textarea rows={3} type="text" className="form-control" required id="exampleInputTitle" defaultValue={img.title} ref={title} maxLength={80} placeholder="max length: 80" />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputDescription" className="form-label" style={{fontWeight: 'bold'}}>
                Description
                </label>
                <textarea rows={6} type="text" className="form-control" required id="exampleInputDescription" defaultValue={img.description} ref={description} placeholder="max length: 350" maxLength={350} />
              </div>

              <div className="mb-3">
                <label htmlFor="projectTypeEdit" className="form-label" style={{fontWeight: 'bold'}}>
                  Project Type
                </label>
                <select className="form-select" ref={project} defaultValue={img?.projectType} id="projectTypeEdit">
                    <option value="Urban">Urban</option>
                    <option value="Peripheral">Peripheral</option>
                </select>
              </div>

              <div className="d-grid gap-2">
                <button type="submit" style={{background: 'black', color: 'white', border: 'none', padding: '5px'}}>{pushing ? <Spinner animation="border" variant="light" /> : "Save"}</button>
              </div>
            </form>
            </Container>
          </Modal.Body>
        </Modal>
    );
}

export default EditModal;